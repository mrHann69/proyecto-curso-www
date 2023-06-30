// import express from "express";
// import DeliverymanController from './controller.js';

const express = require("express");
const DeliverymanController = require('./controller.js');

const router = express.Router();

router.get("/deliveryman", async (req, res) => {
    try {
        const users = await DeliverymanController.getDeliverymans();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post('/deliveryman', async (req, res) => {
    try {
        const newUser = await DeliverymanController.createDeliveryman(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para obtener un usuario por su ID
router.get('/deliveryman', async (req, res) => {
    try {
        const user = await DeliverymanController.getDeliverymanById(req.query.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para actualizar un usuario por su ID
router.put('/deliveryman', async (req, res) => {
    try {
        const user = await DeliverymanController.updateDeliveryman(req.query.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para eliminar un usuario por su ID
router.delete('/deliveryman', async (req, res) => {
    try {
        const message = await DeliverymanController.deleteDeliveryman(req.query.id);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// export default router;
module.exports= router;
