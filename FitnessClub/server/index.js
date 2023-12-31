import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import {
  loginValidation,
  registrationValidation,
} from "./validations/index.js";
import {
  UserController,
  GymController,
  MembershipController,
  NewsController,
} from "./controllers/index.js";
import { handleValidationErrors, checkAuth } from "./utils/index.js";

mongoose
  .connect(
    "mongodb+srv://admin:RDxWMFKWxkJ1K8Uh@cluster0.ea1ohvk.mongodb.net/fitnessclub?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Failed to connect to DB", err);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.post(
  "/auth/login",
  loginValidation.loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/registration",
  registrationValidation.registrationValidation,
  handleValidationErrors,
  UserController.registration
);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/gyms", GymController.getAll);
app.get("/gym/:id", GymController.getById);
app.post("/gym", checkAuth, GymController.create);
app.patch("/gym/:id", checkAuth, GymController.update);
app.delete("/gym/:id", checkAuth, GymController.deleteById);

app.get("/memberships", MembershipController.getAll);
app.get("/membership/:id", MembershipController.getById);
app.post("/membership", checkAuth, MembershipController.create);
app.patch("/membership/:id", checkAuth, MembershipController.update);
app.delete("/membership/:id", checkAuth, MembershipController.deleteById);
app.post(
  "/membershipGymName",
  checkAuth,
  MembershipController.createWithGymName
);
app.patch(
  "/membershipGymName/:id",
  checkAuth,
  MembershipController.updateWithGymName
);

app.get("/news", NewsController.getAll);
app.get("/news/:id", NewsController.getById);
app.post("/news", checkAuth, NewsController.create);
app.patch("/news/:id", checkAuth, NewsController.update);
app.delete("/news/:id", checkAuth, NewsController.deleteById);

const port = 7000;

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened: ", err);
  }

  console.log(`Server listens http://localhost:${port}`);
});
