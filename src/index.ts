import express from 'express'
import cors from 'cors';

const app = express();

app.use(cors({
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
  }));
app.use(express.json());

// Old route statements
import routes from './routes';
app.use(routes);

// New route statements
import { router } from './router';
app.use(router);

export {
    app
}