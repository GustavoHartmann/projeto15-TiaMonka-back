import { Router } from "express";
import addCartEntry from "../controllers/addCartEntry.controller.js";
import validateUser from "../middlewares/cart.middleware.js";

const router = Router();

router.post("/cart", validateUser, addCartEntry);

export default router;
