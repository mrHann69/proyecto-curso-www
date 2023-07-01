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

const sequelize = require('../db/pgdatabase.js')
const { models } = sequelize;

const config = require('../config/config.js');
const validRoles = require('../config/validRoles.js');

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
            if (!reqEmail) return done(null, false, { msg: "email not provided" });
            const sanitizedEmail = reqEmail.trim();
            // verify if user already exist
            const userAlready = await Users.findOne({ where: { email: sanitizedEmail } });
            // const userAlready = await models.Users.findOne({ where: { email: sanitizedEmail } });
            if (userAlready !== null) return done(null, false, { status:false, msg: 'email ready registered' });
            // take data from request
            const { name, telephone, address, roluser } = req.body;
            const hashedPassword = await bcrypt.hash(reqPassword, 10);
            // save new user on database
            const user = await models.Users.create(
                {
                    name,
                    email: sanitizedEmail,
                    telephone,
                    address,
                    roluser,
                    password: hashedPassword
                });
            if (user === null || !user) return done(null, false, { status:false, msg: 'signup failed' });
            
            // attach new user data to request
            return done(null, user.dataValues, { status:true , msg: "can now Login !" });
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
            const sanitizedEmail = reqEmail.trim();
            if (!sanitizedEmail) return done(null, false, { status:false, msg: "email not provided" });

            // const userAlready = await Users.findOne({ where: { email: sanitizedEmail } });
            const userAlready = await models.Users.findOne({ where: { email: sanitizedEmail } });
            if (userAlready === null || userAlready === undefined) {
                return done(null, false, { status:false, msg: 'user doesn\'t exist😭' });
            }
            // const validation = await Users.isValidPassword(reqPassword, userAlready.password);
            const validation = await models.Users.isValidPassword(reqPassword, userAlready.password);

            if (!validation) {
                return done(null, true, { status:false, msg: 'wrong password😭' });
            }
            delete req.body.email;
            delete req.body.password;
            return done(null, userAlready.dataValues, {  status:true, msg: "login successfull!" });
        } catch (error) {
            return done(error);
        }
    })
);




passport.use('jwt', new Strategy({
    secretOrKey: `${config.TOKEN_SECRET}`,
    jwtFromRequest: ExtractJwt.fromHeader('x_access_token')
}, async (dataFromToken, done) => {
    try {
        if(!dataFromToken) return done(null, false, {status:false, msg: 'token not provided' });
        
        const dataUser = dataFromToken;
            
        if (!validRoles.includes(dataUser.roluser)) {
            return done(null, true, { status:false, msg: 'invalid role user' });
        }
        delete dataFromToken?.iat;
        // const userAlready = await Users.findOne({ where: { email: dataFromToken.email } });
        const userAlready = await models.Users.findOne({ where: { email: dataFromToken.email } });
        if (userAlready === null || userAlready === undefined) return done(null, false, { msg: 'invalid token' });
        return done(null, userAlready.dataValues, { status:true, msg: "valid token" });
    } catch (error) {
        return done(error)
    }
}));