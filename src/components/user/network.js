// import express from "express";
// import userController from './controller.js';

const express = require('express');
const userController = require('./controller.js');


const router = express.Router();

router.get("/users", async (req, res) => {
    try {
        const users = await userController.getUserss();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post('/user', async (req, res) => {
    try {
        const newUser = await userController.createUsers(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para obtener un usuario por su ID
router.get('/user', async (req, res) => {
    try {
        const user = await userController.getUsersById(req.query.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para actualizar un usuario por su ID
router.put('/user', async (req, res) => {
    try {
        const user = await userController.updateUsers(req.query.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para eliminar un usuario por su ID
router.delete('/user', async (req, res) => {
    try {
        const message = await userController.deleteUsers(req.query.id);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// export default router;
module.exports = router;
