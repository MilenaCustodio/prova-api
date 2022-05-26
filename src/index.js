import 'dotenv/config';
import express from "express";
import cors from 'cors';
import endpoints from './endpoints.js';
import services from './services';


const server = express();
server.use(cors());
server.use(express.json());
server.use(endpoints);
server.use(services);

server.listen(process.env.PORT, 
                () => console.log('Online at' +  process.env.PORT));




