const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Créer une nouvelle commande
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  try {
    const savedOrder = await order.save();
    res.status(201).send(savedOrder);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtenir toutes les commandes
router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

module.exports = router;
