import { Request, Response } from 'express';
import { EmailService } from '../services/emailService';

export class EmailController {
    static async sendEmail(req: Request, res: Response) {
        const { name, email, message } = req.body;

        try {
            await EmailService.sendGenericEmail({ name, email, message });
            res.status(200).json({ message: 'Email enviado con éxito' });
        } catch (error: any) {
            console.error('Error al enviar el correo:', error.message || error);
            res.status(500).json({ error: 'Error al enviar el correo' });
        }
    }
}