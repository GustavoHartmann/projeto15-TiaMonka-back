import { Router } from "express";
import { signIn } from "../controllers/signIn.controller.js";
import { signInValidation } from "../middlewares/signIn.middleware.js";

const router = Router();

router.post("/sign-in", signInValidation, signIn);

export default router;
