// backend/src/routes/contactRoutes.test.js

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

beforeAll(async () => {
    const url = 'mongodb://127.0.0.1/mini-crm-test';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
});

describe('Test Contact Endpoints', () => {
    it('should create a new contact', async () => {
        const res = await request(app)
            .post('/api/contacts')
            .send({
                firstname: 'John',
                lastname: 'Doe',
                email: 'john.doe@example.com'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });

    // Ajoutez les autres tests ici
});
