import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import videoRouter from './routes/videoRoute.js';
import productRouter from './routes/productRoute.js';
import commentRouter from './routes/commentRoute.js';

dotenv.config()
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(cors());
app.use('/', videoRouter)
app.use('/', productRouter)
app.use('/', commentRouter)

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
})