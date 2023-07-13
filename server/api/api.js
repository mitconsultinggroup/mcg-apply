import express from "express";
import auth from "./utils/auth.js";
import events from "./candidate/events.js";
import application from "./candidate/application.js";

const router = express.Router();

// User authentication (signup, login, logout)
router.use("/auth", auth);

// Event routes (sign into event)
router.use("/events", events);

// Application routes (submit application)
router.use("/application", application);

export default router;
