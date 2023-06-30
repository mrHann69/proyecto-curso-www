import express from 'express';
import morgan from 'morgan';
import routes from "./routes.js";
import bodyParser from 'body-parser';
import './db/pgdatabase.js';
import { testConnection } from './db/pgdatabase.js';
// import './db/db-connection/db-mongo.js';

testConnection();

import cors from 'cors';

import "./middlewares/auth.js";

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccesssStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res)=>{
    res.status(200).redirect('/api/v1');
});
app.get('/api/v1', (req, res)=>{
    res.status(200).json({msg:"Welcome to Mandados API"});
});
app.get('*',(req,res)=>{
    res.status(404).end("404 - page not found ");
});


export default app;