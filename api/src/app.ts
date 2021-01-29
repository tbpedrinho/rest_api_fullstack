import express from "express";
import morgan from "morgan";
import config from "./config";
import cors from 'cors';

import noticiasRoutes from './news/noticia.routes'

const app = express()

app.set('port', config.PORT);


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(noticiasRoutes);

export default app;