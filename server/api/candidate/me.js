import express from "express";

import verifyToken from "../utils/token.js";

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
    let data = {
        firstname: req.user.userData.firstname,
        lastname: req.user.userData.lastname,
        email: req.user.userData.email,
    };
    res.status(200).json({
        message: "success",
        data: data,
    });
});

export default router;
