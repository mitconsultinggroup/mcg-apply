import express from "express";

import { User } from "../../db/user";
import verifyToken from "../utils/token.js";

const router = express.Router();

const checkAdminOrMember = (req, res, next) => {
    if (
        req.user.userData.usertype == "admin" ||
        req.user.userData.usertype == "member"
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
    User.find({ usertype: "candidate" }).exec((err, candidates) => {
        if (err) {
            res.status(500).json({
                message: "error finding candidates in database",
            });
        } else {
            if (!candidates) {
                res.status(500).json({
                    message: "error finding candidates in database",
                });
            } else {
                res.status(200).json({
                    message: "candidates found in database",
                    candidates: candidates,
                });
            }
        }
    });
});

router.post("/submit-feedback", async (req, res) => {
    if (!req.body.candidateEmail || !req.body.feedback) {
        res.status(400).json({
            message: "missing required fields",
        });
        return;
    }

    User.findOne({ email: req.body.candidateEmail }).exec(
        (err, candidate) => {
            if (err) {
                res.status(500).json({
                    message: "error finding candidate in database",
                });
            } else {
                if (!candidate) {
                    res.status(500).json({
                        message: "error finding candidate in database",
                    });
                } else {
                    let feedback = {
                        member:
                            req.user.userData.firstname + " " + req.user.userData.lastname,
                        feedback: req.body.feedback,
                        tags: req.body.tags ? req.body.tags : [],
                    };
                    candidate.userData.feedback.push(feedback);
                    candidate.save((err) => {
                        if (err) {
                            res.status(500).json({
                                message: "error saving feedback to candidate",
                            });
                        } else {
                            res.status(200).json({
                                message: "feedback saved to candidate",
                            });
                        }
                    });
                }
            }
        }
    );
});
