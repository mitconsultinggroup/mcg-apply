import express from "express";

import verifyToken from "./utils/token.js";

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
    let data = {
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        userData: req.user.userData ? req.user.userData : {},
        usertype: req.user.usertype,
    };
    res.status(200).json({
        message: "success",
        data: data,
    });
});

export default router;
