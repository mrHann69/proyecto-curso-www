// import express from "express";
// import BranchOfficeController from './controller.js';

const express = require( "express");
const BranchOfficeController = require('./controller.js');

const router = express.Router();

// Endpoint para obtener todas las branchoffices
router.get("/branchoffice", async (req, res) => {
    try {
        const branchoffice = await BranchOfficeController.getBranchOffices();
        res.json(branchoffice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Endpoint para crear una branchoffice
router.post('/branchoffice', async (req, res) => {
    try {
        const newBranchoffice = await BranchOfficeController.createBranchOffice(req.body);
        res.status(201).json(newBranchoffice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para obtener un usuario por su ID
router.get('/branchoffice', async (req, res) => {
    try {
        const branchoffice = await BranchOfficeController.getBranchOfficeById(req.query.id);
        res.json(branchoffice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para actualizar un usuario por su ID
router.put('/branchoffice', async (req, res) => {
    try {
        const branchoffice = await BranchOfficeController.updateBranchOffice(req.query.id, req.body);
        res.json(branchoffice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para eliminar un usuario por su ID
router.delete('/branchoffice', async (req, res) => {
    try {
        const message = await BranchOfficeController.deleteBranchOffice(req.query.id);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// export default router;
module.exports = router;
