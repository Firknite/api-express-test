import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import routes from './routes/index';

const app = express();

app.use(routes);
app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());

export default app;
