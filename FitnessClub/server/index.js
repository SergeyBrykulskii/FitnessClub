import express from 'express';
import mongoose from 'mongoose';

import { loginValidation } from './validations/index.js';
import { UserController, GymController, MembershipController, NewsController } from './controllers/index.js';

mongoose.connect(
    'mongodb+srv://admin:RDxWMFKWxkJ1K8Uh@cluster0.ea1ohvk.mongodb.net/fitnessclub?retryWrites=true&w=majority',
).then(() => {
    console.log('Connected to DB');
}).catch((err) => { 
    console.log('Failed to connect to DB', err);
});

const app = express();

app.use(express.json());

const port = 7000;

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened: ', err);
    }

    console.log(`Server listens http://localhost:${port}`);
});