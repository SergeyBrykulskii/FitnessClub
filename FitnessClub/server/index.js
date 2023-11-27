import express from 'express';

import { UserController, GymController, MembershipController, NewsController } from './controllers/index.js';

const app = express();

const port = 7000;


app.listen(port, function () {
    console.log(`Server listens http://localhost:${port}`);
});