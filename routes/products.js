const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Créer un nouveau produit
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.status(201).send(savedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtenir tous les produits
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

module.exports = router;
