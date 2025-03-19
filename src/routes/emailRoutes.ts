import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequests';
import { sendEmail } from '../controllers/emailController';

const router = express.Router();

router.post(
    '/send-email',
    [
        body('name').notEmpty().withMessage('El nombre es requerido'),
        body('email').isEmail().withMessage('Email no válido'),
        body('message').notEmpty().withMessage('El mensaje es requerido'),
    ],
    validateRequest,
    sendEmail
);

export default router;