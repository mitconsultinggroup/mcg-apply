import express from "express";

import verifyToken from "./utils/token.js";

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
    let userData = {}
    let decision = "none"
    let applied = false

    if (req.user.userData.events) {
        userData.events = req.user.userData.events
    }
    if (req.user.userData.application) {
        userData.application = req.user.userData.application,
        applied = true
    }
    let data = {
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        userData: userData,
        usertype: req.user.usertype,
        applied: applied,
        decision: decisions
    };
    res.status(200).json({
        message: "success",
        data: data,
    });
});

export default router;
