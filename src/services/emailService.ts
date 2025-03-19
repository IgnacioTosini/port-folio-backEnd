import { EmailData } from '../types';
import transporter from '../utils/nodemailer';

export class EmailService {
    static async sendGenericEmail(user: EmailData) {
        const mailOptions = {
            from: `Portfolio <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `Nuevo mensaje de ${user.name}`,
            html: `
                <p><strong>Nombre:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${user.message}</p>
            `,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Mensaje enviado:', info.response);
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            throw new Error('No se pudo enviar el correo');
        }
    }
}