import express from 'express'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Old statements
import routes from './routes';
app.use(routes);

// New route statements
import { router } from './router';
app.use(router);

export {
    app
}