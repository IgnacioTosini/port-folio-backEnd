import express from 'express';
import { body } from 'express-validator';
import { handleInputErrors } from '../middlewares/validateRequests';
import { EmailController } from '../controllers/emailController';

const router = express.Router();

router.post(
    '/send-email',
    [
        body('name').notEmpty().withMessage('El nombre es requerido'),
        body('email').isEmail().withMessage('El email no es válido'),
        body('message').notEmpty().withMessage('El mensaje es requerido'),
    ],
    handleInputErrors,
    EmailController.sendEmail
);

export default router;