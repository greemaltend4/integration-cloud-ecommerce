const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Créer un nouvel utilisateur
router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtenir tous les utilisateurs
router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
