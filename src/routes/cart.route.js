import { Router } from "express";
import getCartData from "../controllers/getCartData.controller.js";
import validateUser from "../middlewares/cart.middleware.js";

const router = Router();

router.get("/cart", validateUser, getCartData);

export default router;
