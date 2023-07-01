// import express from "express";
// import passport from 'passport';
// import Jwt from 'jsonwebtoken';
// import config from '../../config/config.js';

const express = require("express");

const passport = require('passport');
const Jwt = require('jsonwebtoken');

const config = require('../../config/config.js');


const router = express.Router();

const signingToken = (user) => {
  const { name, email, telephone, address, password, roluser } = user;
  const token = Jwt.sign({ name, email, telephone, address, password, roluser },
    config.TOKEN_SECRET, {
    expiresIn: config.TOKEN_EXPIRES
  });
  return token;
}

router.post('/register',

  passport.authenticate('signup', { session: false }),

  (req, res) => {
    const { name, email, telephone, address, password, roluser } = req.user;
    const { status, msg } = req?.authInfo;
    const token = signingToken({ name, email, telephone, address, password, roluser });
    if (status) {
      return res.status(200).json({
        // msg: "signup successful, you can now login",
        msg,
        user: { name, email, telephone, address, roluser },
        x_access_token: token
      });
    }
    return res.status(400).json(
      {
        msg,
        user: { name, email, telephone, address, roluser }
      }
    );
  }
);

router.post('/login',

  passport.authenticate('login', { session: false }),

  (req, res) => {
    try {
      const { status, msg } = req?.authInfo;
      if (!status) return res.status(401).json({ msg });
      const token = signingToken(req.user);
      return res.status(200).json({ msg, x_access_token: token });
    } catch (error) {
      console.error(error);
    }
  }
);


// export default router;
module.exports = router;
