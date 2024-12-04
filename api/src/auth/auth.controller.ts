import { Router } from "express";
import AuthServices from "./auth.service";

const AuthController = Router();

AuthController.post("/signin", AuthServices.signin);
AuthController.post("signup/", AuthServices.signup);
