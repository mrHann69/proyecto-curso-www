
const express = require("express");
const BranchOfficeController = require('./controller.js');
const passport = require('passport');
const verifyRol = require('../../middlewares/verifyRol.js');
const config = require("../../config/config.js");
const router = express.Router();
// Endpoint para obtener todas las branchoffices
router.get("/branchoffices", async (req, res) => {
    try {
        const branchoffice = await BranchOfficeController.getBranchOffices();
        res.json(branchoffice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Endpoint para obtener una oficina por su ID
router.get('/branchoffice',
    async (req, res) => {
        try {
            const branchoffice = await BranchOfficeController.getBranchOfficeById(req.query.id);
            if(!branchoffice.status) res.status(404).json({msg: branchoffice.msg})
            res.status(200).json(branchoffice);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// Endpoint para crear una branchoffice
router.post('/branchoffice',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const { status, msg } = req.authInfo;
            if (!status) return res.status(401).json({ msg });
            if(req.user?.roluser !== config.ROLE_ADMIN) return res.status(401).json({msg: 'privilegios insuficientes'});
            const newBranchoffice = await BranchOfficeController.createBranchOffice(req.body);
            if(newBranchoffice?.foundOld) return res.status(400).json({msg: 'sucursal existe'})
            return res.status(200).json(newBranchoffice);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// Endpoint para actualizar una oficina por su ID
router.put('/branchoffice',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const { status, msg } = req.authInfo;
            if (!status) return res.status(401).json({ msg });
            if(req.user?.roluser !== config.ROLE_ADMIN) return res.status(401).json({msg: 'privilegios insuficientes'});
            const {updatedBranchoffice, foundOld} = await BranchOfficeController.updateBranchOffice(req.query.id, req.body);
            if(!foundOld) return res.status(400).json({msg: 'sucursal No existe'});
            return res.status(200).json({msg: updatedBranchoffice});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// Endpoint para eliminar una oficina por su ID
router.delete('/branchoffice',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const { status, msg } = req.authInfo;
            if (!status) return res.status(401).json({ msg });

            const deletedBranchoffice = await BranchOfficeController.deleteBranchOffice(req.query.id);
            if( !deletedBranchoffice.foundOld ) return { msg: deletedBranchoffice.msg} 
            return res.status(200).json({ msg: deletedBranchoffice.msg});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

module.exports = router;
