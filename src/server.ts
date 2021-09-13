import dotenv from "dotenv";
dotenv.config();

import { app } from './index'

app.listen(process.env.PORT || 3333)