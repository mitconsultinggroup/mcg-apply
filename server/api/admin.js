import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();
import { Config } from "../db/database.js";
import verifyToken from "./utils/token.js";

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
    let config = await Config.findOne({
        configType: "eventCodes",
    })
    if (!config) {
        const newConfig = new Config({
            configType: "eventCodes",
        });
        newConfig.configData = {};
        newConfig.configData[req.body.eventName] = req.body.eventCode;
        newConfig.markModified("configData");
        await newConfig.save()
        res.status(200).json({
            message: "event code saved to database",
        });

    }
    else {
        config.configData[req.body.eventName] = req.body.eventCode;
        config.markModified("configData");
        await config.save()
        res.status(200).json({
            message: "event code saved to database",
        });
    }
});

router.get("/get-event-codes", async (req, res) => {
    Config.findOne({
        configType: "eventCodes",
    }).then(config => {
        if (!config) {
            res.status(200).json({
                message: "no event codes in database",
                eventCodes: {},
            });
        }
        else {
            res.status(200).json({
                message: "event codes found in database",
                eventCodes: config.configData,
            });
        }

    }).catch(
        err => {
            res.status(500).json({
                message: "error finding event codes in database",
            });
        }
    );
});



export default router;