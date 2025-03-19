import { EmailData } from './../types/index';
import transporter from "../utils/nodemailter";


export class EmailService {
    static async sendGenericEmail(user: EmailData) {
        const mailOptions = {
            from: user.email,
            to: process.env.GMAIL_USER,
            subject: 'Nuevo mensaje desde tu portafolio',
            html: `<p>Hola ${user.name},</p>
                <p>${user.message}</p>`,
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