
const express = require('express');
const productController = require('./controller.js')
const passport = require('passport');
const router = express.Router();


router.get("/products",
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const {status, msg} = req.authInfo;
            if(!status) return res.status(401).json({msg});

            const products = await productController.getProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    })

router.get('/product',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const {status, msg} = req.authInfo;
            if(!status) return res.status(401).json({msg});

            const getProduct = await productController.getProductById(req.query.id);
            if (getProduct.status) return res.status(200).json(getProduct);
            return res.status(404).json(getProduct)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

router.post('/product',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const {status, msg} = req.authInfo;
            if(!status) return res.status(401).json({msg});

            const newProduct = await productController.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
// Endpoint para actualizar un usuario por su ID
router.put('/product',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const {status, msg} = req.authInfo;
            if(!status) return res.status(401).json({msg});

            const productUpdated = await productController.updateProduct(req.query.id, req.body);
            if (productUpdated.status) return res.status(200).json(productUpdated);
            return res.status(404).json({msg: 'producto no actualizado'});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// Endpoint para eliminar un usuario por su ID
router.delete('/product',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const {status, msg} = req.authInfo;
            if(!status) return res.status(401).json({msg});

            const message = await productController.deleteProduct(req.query.id);
            if (message.status) return res.status(200).json({ msg: message.msg }).end();
            return res.status(404).json({ msg: message.msg }).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

module.exports = router;