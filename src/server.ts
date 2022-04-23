import express, { json } from 'express';
import "express-async-errors";
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routers/index.js';
import handleErrorsMiddleware from './middlewares/handleErrorsMiddleware.js';

dotenv.config();

const server = express();
server.use(cors());
server.use(json());
server.use(router);
server.use(handleErrorsMiddleware);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
});