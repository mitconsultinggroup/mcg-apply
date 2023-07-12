import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

import { v4 } from "uuid";

import { Config } from "../db/database.js";
import verifyToken from "./token.js";

const isAdminMiddleware = (req, res, next) => {
    if (req.user.usertype != "admin") {
        res.status(401).json({
            message: "unauthorized",
        });
        return;
    }
    next();
};

router.use(verifyToken);
router.use(isAdminMiddleware);

router.post("/set-event-code", async (req, res) => {
    if (!req.body.eventName || !req.body.eventCode) {
        res.status(400).json({
            message: "missing required fields",
        });
        return;
    }
    Config.findOne({
        name: "eventCodes",
    }).exec((err, config) => {
        if (err) {
            res.status(500).json({
                message: "error finding event codes in database",
            });
        }
        else {
            if (!config) {
                res.status(500).json({
                    message: "error finding event codes in database",
                });
            }
            else {
                config.values[req.body.eventName] = req.body.eventCode;
                config.save((err) => {
                    if (err) {
                        res.status(500).json({
                            message: "error saving event code to database",
                        });
                    }
                    else {
                        res.status(200).json({
                            message: "event code saved to database",
                        });
                    }
                });
            }
        }
    });
});

router.get("/get-event-codes", async (req, res) => {
    Config.findOne({
        name: "eventCodes",
    }).exec((err, config) => {
        if (err) {
            res.status(500).json({
                message: "error finding event codes in database",
            });
        }
        else {
            if (!config) {
                res.status(500).json({
                    message: "error finding event codes in database",
                });
            }
            else {
                res.status(200).json({
                    message: "event codes found in database",
                    eventCodes: config.values,
                });
            }
        }
    });
});



export default router;