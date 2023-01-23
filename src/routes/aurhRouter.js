import express from 'express';
import { authController } from '../controllers/authController';

export const authRouter = new express.Router();

authRouter.post('/registration', authController.registration);
