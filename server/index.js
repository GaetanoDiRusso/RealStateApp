import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import propertiesRoutes from './routes/properties.js'
import userRoutes from './routes/user.js'

//Instances
dotenv.config();
const app = express();

//Middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '30mb'}));

//Routes
app.use('/properties', propertiesRoutes);
app.use('/user', userRoutes)

//Constants
const CONNECTION_URL = process.env.MONGOOSE_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log('listening on port ' + PORT)))
    .catch((error)=> console.error(error))
