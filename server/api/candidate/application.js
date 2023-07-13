import express from "express";
import verifyToken from "../utils/token.js";

const router = express.Router();
router.use(verifyToken);

const hasRequiredFields = (req, res, next) => {
    if (
        !req.body.name ||
        !req.body.email ||
        !req.body.gradYear ||
        !req.body.major ||
        !req.body.whyJoin ||
        req.body.resume
    ) {
        res.status(400).json({
            message: "missing required fields",
        });
        return;
    }
    next();
};

router.get("/get-application", async (req, res) => {
    const user = req.user;
    res.status(200).json({
        application: user.userData.application,
    });
});

router.post("/submit-application", hasRequiredFields, async (req, res) => {
    const user = req.user;

    const application = user.userData.application;

    application.name = req.body.name;
    application.email = req.body.email;
    application.gradYear = req.body.gradYear;
    application.major = req.body.major;
    application.whyJoin = req.body.whyJoin;
    application.resume = req.body.resume;
    application.submittedAt = Date.now();

    user.save((err) => {
        if (err) {
            res.status(500).json({
                message: "error saving application to user",
            });
        } else {
            res.status(200).json({
                message: "application saved to user",
            });
        }
    });
});

export default router;