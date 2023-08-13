import express from "express";

import { User } from "../../db/user";
import verifyToken from "../utils/token.js";

const router = express.Router();

const checkAdminOrMember = (req, res, next) => {
    if (
        req.user.usertype == "admin" ||
        req.user.usertype == "member"
    ) {
        next();
    } else {
        res.status(403).json({
            message: "forbidden",
        });
    }
};

router.use(verifyToken);
router.use(checkAdminOrMember);

router.get("/all-candidates", async (req, res) => {
    User.find({ usertype: "candidate" })
        .then((candidates) => {
            if (!candidates) {
                res.status(500).json({
                    message: "error finding candidates in database",
                });
            } else {
                candidates = candidates.map((candidate) => {
                    return {
                        name:
                            candidate.firstname + " " + candidate.lastname,
                        email: candidate.email,
                    };
                });
                res.status(200).json({
                    message: "candidates found in database",
                    candidates: candidates,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "error finding candidates in database",
            });
        });
});

router.post("/submit-feedback", async (req, res) => {
    if (!req.body.candidateName) {
        res.status(400).json({
            message: "candidate name required",
        });
        return;
    }

    if (req.body.candidateEmail) {
        User.findOne({ email: req.body.candidateEmail }).then(async (candidate) => {
            if (!candidate) {
                res.status(500).json({
                    message: "error finding candidate in database",
                });
            } else {
                let feedback = {
                    member:
                        req.user.firstname + " " + req.user.lastname,
                    feedback: req.body.feedback,
                };
                if (!candidate.userData) {
                    candidate.userData = {};
                }
                if (!candidate.userData.feedback) {
                    candidate.userData.feedback = [];
                }
                candidate.userData.feedback.push(feedback);
                candidate.markModified("userData");
                candidate
                    .save()
                    .then(() => {
                        res.status(200).json({
                            message: "feedback submitted",
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({
                            message: "error saving feedback to database",
                        });
                    });
            }
        });
    } else {
        return res.status(400).json({
            message: "candidate email required",
        });
    }
});

export default router;
