import express from 'express';
import mongoose from 'mongoose';

import { loginValidation, registrationValidation } from './validations/index.js';
import { UserController, GymController, MembershipController, NewsController } from './controllers/index.js';
import { handleValidationErrors } from './utils/index.js';

mongoose.connect(
    'mongodb+srv://admin:RDxWMFKWxkJ1K8Uh@cluster0.ea1ohvk.mongodb.net/fitnessclub?retryWrites=true&w=majority',
).then(() => {
    console.log('Connected to DB');
}).catch((err) => { 
    console.log('Failed to connect to DB', err);
});

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.post('/auth/registration', registrationValidation, handleValidationErrors, UserController.registration)

const port = 7000;

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened: ', err);
    }

    console.log(`Server listens http://localhost:${port}`);
});