// import express from "express";
// import userController from './controller.js';

const express = require('express');
const productController = require('./controller.js')

const router = express.Router();

router.get("/products", async (req, res) => {
    try {
        const products = await productController.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/product', async (req, res) => {
    try {
        const product = await productController.getProductById(req.query.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/product', async (req, res) => {
    try {
        const newProduct = await productController.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Endpoint para actualizar un usuario por su ID
router.put('/product', async (req, res) => {
    try {
        const productUpdated = await productController.updateProduct(req.query.id, req.body);
        res.json(productUpdated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para eliminar un usuario por su ID
router.delete('/product', async (req, res) => {
    try {
        const message = await productController.deleteProduct(req.query.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// export default router;
module.exports = router;