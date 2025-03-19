import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes';

dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = [
            'https://port-folio-front-end-six.vercel.app', // Producción
            'http://localhost:5173' // Desarrollo
        ];

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); // Permitir acceso
        } else {
            callback(new Error('No permitido por CORS')); // Bloquear acceso
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// Rutas
app.use('/api', emailRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});