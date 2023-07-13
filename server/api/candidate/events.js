import express from "express";

import { Config } from "../../db/database.js";
import verifyToken from "../utils/token.js"

const router = express.Router();

router.post("/event-signin", verifyToken, async (req, res) => {
    Config.findOne({
        name: "eventCodes",
    }).exec((err, config) => {
        if (err) {
            res.status(500).json({
                message: "error finding event codes in database",
            });
        } else {
            if (!config) {
                res.status(500).json({
                    message: "error finding event codes in database",
                });
            } else {
                if (!req.body.eventName || !req.body.eventCode) {
                    res.status(400).json({
                        message: "missing required fields",
                    });
                    return;
                }
                else {
                    if (config.values[req.body.eventName] == req.body.eventCode) {
                        req.user.userData.events[req.body.eventName] = true;
                        req.user.save((err) => {
                            if (err) {
                                res.status(500).json({
                                    message: "error saving event code to user",
                                });
                            } else {
                                res.status(200).json({
                                    message: "event code saved to user",
                                });
                            }
                        });
                    } else {
                        res.status(400).json({
                            message: "invalid event code",
                        });
                    }
                }
            }
        }
    });

});


export default router;