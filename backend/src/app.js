require('dotenv').config();  // Ajoutez cette ligne en haut du fichier

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', contactRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Démarrer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
