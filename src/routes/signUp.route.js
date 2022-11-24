import { Router } from "express";
import { signUp } from "../controllers/signUp.controller.js";
import { signUpValidation } from "../middlewares/signUp.middleware.js";

const router = Router();

router.post("sign-up", signUpValidation, signUp);

export default router;
