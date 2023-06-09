import express from 'express';
const router = express.Router();

// User authentication (signup, login, logout)
import auth from './auth.js';
router.use("/auth", auth);

export default router;