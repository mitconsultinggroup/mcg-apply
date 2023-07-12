import express from 'express';
const router = express.Router();

// User authentication (signup, login, logout)
import auth from './auth.js';
router.use("/auth", auth);

// Event routes (sign into event)
import events from './events.js';
router.use("/events", events);

export default router;