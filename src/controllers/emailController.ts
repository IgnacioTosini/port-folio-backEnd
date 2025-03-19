import { Request, Response } from 'express';
import transporter from '../utils/nodemailter';

export const sendEmail = async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: name,
        to: process.env.GMAIL_USER,
        subject: `Mensaje de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email enviado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar el email' });
    }
};