import express from 'express';
import { signup } from '../controllers/authController.js';

const router = express.Router();

// Route: POST /api/auth/signup
router.post('/signup', signup);

export default router;
