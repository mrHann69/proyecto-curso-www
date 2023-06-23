import express from "express";

import passport from 'passport';
import Jwt from 'jsonwebtoken';

import config from '../../config/config.js';

const router = express.Router();

const signingToken = (user) => {
    const { name, email, telephone, address, password, roluser } = user;
    const token = Jwt.sign({ name, email, telephone, password, roluser },
        config.TOKEN_SECRET, {
        expiresIn: config.TOKEN_EXPIRES
    });
    return token;
}

router.post('/register',

    passport.authenticate('signup', { session: false }),

    (req, res) => {
        const { name, email, telephone, address, password, roluser } = req.user;
        const token = signingToken({ name, email, telephone, address, password, roluser });
        res.status(200).json({
            message: "signup successful, you can now login",
            user: { name, email, telephone, address, roluser },
            x_access_token: token
        });
    }
);

router.post('/login',

    passport.authenticate('login', { session: false }),

    (req, res) => {
        try {
            const token = signingToken(req.user);
            res.status(200).json({ x_access_token: token });
        } catch (error) {
            console.error(error);
        }
    }
);


export default router;
