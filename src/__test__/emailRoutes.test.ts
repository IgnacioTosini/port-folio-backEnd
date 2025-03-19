import request from 'supertest';
import express from 'express';
import emailRoutes from '../routes/emailRoutes';

const app = express();
app.use(express.json());
app.use('/api', emailRoutes);

describe('Email Routes', () => {
    it('should send an email successfully', async () => {
        const response = await request(app)
            .post('/api/send-email')
            .send({
                email: 'test@example.com',
                message: 'This is a test message',
            });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Email sent successfully');
    });

    it('should return an error if required fields are missing', async () => {
        const response = await request(app)
            .post('/api/send-email')
            .send({
                email: '',
                message: '',
            });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Email and message are required');
    });
});