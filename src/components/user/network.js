// import express from "express";
// import userController from './controller.js';

const express = require('express');
const userController = require('./controller.js');
const passport = require('passport');
const router = express.Router();
const config = require('../../config/config.js')

router.get("/users",
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const { roluser } = req.user;
            if (roluser !== config.ROLE_ADMIN) return res.status(401).json({ msg: "no admin role" });
            const users = await userController.getUserss();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    })

router.post('/user',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const { roluser } = req.user;
            if (roluser !== config.ROLE_ADMIN) return res.status(401).json({ msg: "no admin role" });
            const newUser = await userController.createUsers(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// Endpoint para obtener un usuario por su ID
router.get('/user',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const user = await userController.getUsersById(req.query.id);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// Endpoint para actualizar un usuario por su ID
router.put('/user',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const user = await userController.updateUsers(req.query.id, req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// Endpoint para eliminar un usuario por su ID
router.delete('/user',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const { roluser } = req.user;
            const { status, msg } = req?.authInfo;
            if (roluser !== config.ROLE_ADMIN) return res.status(401).json({ msg: "no admin role" });
            const message = await userController.deleteUsers(req.query.id);
            return res.status(200).json({ message });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// export default router;
module.exports = router;
