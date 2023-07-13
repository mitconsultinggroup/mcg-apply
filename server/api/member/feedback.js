import express from "express";

import { User } from "../../db/user";

const router = express.Router();

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
