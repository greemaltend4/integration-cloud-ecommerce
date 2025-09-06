const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB...'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur l API de l intégration cloud pour le e-commerce!');
});

app.listen(PORT, () => {
  console.log(
    `Serveur en marche sur http://localhost:${PORT}`
  );
});