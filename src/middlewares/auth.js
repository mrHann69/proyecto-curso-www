// import {Users} from "../components/user/model.js";
// import passport from 'passport';
// import LocalStrategy from 'passport-local';
// import { Strategy, ExtractJwt } from 'passport-jwt';
// import bcrypt from 'bcrypt';

const { Users } = require('../components/user/model.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { Strategy, ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcrypt');
// import config from '../../config/config.js';

/** SIGNUP & SIGN IN  with postgres */
passport.use('signup', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    async (req, reqEmail, reqPassword, done) => {
        try {
            //sanitize email with blank spaces
            if (!reqEmail) return done(null, false, { message: "email not provided" });
            const sanitizedEmail = reqEmail.trim();

            // verify if user already exist
            const userAlready = await Users.findOne({ where: { email: sanitizedEmail } });
            if (userAlready !== null) return done(null, false, { message: 'email ready registered' });

            // take data from request
            const { name, telephone, address, roluser } = req.body;
            const hashedPassword = await bcrypt.hash(reqPassword, 10);

            // save new user on database
            const user = await Users.create(
                {
                    name,
                    email: sanitizedEmail,
                    telephone,
                    address,
                    roluser,
                    password: hashedPassword
                });
            if (user === null || !user) return done(null, false, { message: 'signup failed' });
            
            // attach new user data to request
            return done(null, user.dataValues, { message: "can now Login !" });
        } catch (error) {
            return done(error);
        }
    })
);


passport.use('login', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    async (req, reqEmail, reqPassword, done) => {
        try {
            if (!reqEmail) return done(null, false, { message: "email not provided" });
            const sanitizedEmail = reqEmail.trim();

            const userAlready = await Users.findOne({ where: { email: sanitizedEmail } });
            if (userAlready === null || userAlready === undefined) {
                return done(null, false, { message: 'user dont exist😭' });
            }
            console.log("user: ", userAlready);
            const validation = await Users.isValidPassword(reqPassword, userAlready.password);
            console.log("validation:", validation);

            if (!validation) {
                return done(null, false, { message: 'wrong password😭' });
            }
            delete req.body.email;
            delete req.body.password;
            return done(null, userAlready.dataValues, { message: "login successfull" });
        } catch (error) {
            return done(error);
        }
    })
);




passport.use('jwt', new Strategy({
    secretOrKey: `${process.env.TOKEN_SECRET}`,
    jwtFromRequest: ExtractJwt.fromHeader('x_access_token')
}, async (dataFromToken, done) => {
    try {
        if(!dataFromToken) return done(null, false, { message: 'token not provided' });

        delete dataFromToken.iat;
        const userAlready = await Users.findOne({ where: { email: dataFromToken.email } });
        if (userAlready === null || userAlready === undefined) 
            return done(null, false, { message: 'invalid token' });

        return done(null, userAlready.dataValues.roluser, { msg: "valid token" });
    } catch (error) {
        return done(error)
    }
}));