//backend/src/routes/contactRoutes.test.js
const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const app = require('../app');
const Contact = require('../models/contact');

beforeAll(async () => {
    const url = 'mongodb://127.0.0.1/mini-crm-test';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
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

    it('should fetch all contacts', async () => {
        const res = await request(app).get('/api/contacts');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should fetch a contact by ID', async () => {
        const contact = new Contact({ firstname: 'Jane', lastname: 'Doe', email: 'jane.doe@example.com' });
        await contact.save();
        const res = await request(app).get(`/api/contacts/${contact._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual('jane.doe@example.com');
    });

    it('should update a contact by ID', async () => {
        const contact = new Contact({ firstname: 'Jane', lastname: 'Doe', email: 'jane.doe@example.com' });
        await contact.save();
        const res = await request(app)
            .put(`/api/contacts/${contact._id}`)
            .send({ firstname: 'Janet' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.firstname).toEqual('Janet');
    });

    it('should delete a contact by ID', async () => {
        const contact = new Contact({ firstname: 'Jane', lastname: 'Doe', email: 'jane.doe@example.com' });
        await contact.save();
        const res = await request(app).delete(`/api/contacts/${contact._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Contact deleted');
    });
});
