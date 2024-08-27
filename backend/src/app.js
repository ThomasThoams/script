// backend/src/app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');  // Importer les routes d'authentification

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', contactRoutes);
app.use('/api', authRoutes);  // Enregistrer les routes d'authentification

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
