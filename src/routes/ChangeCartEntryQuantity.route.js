import { Router } from "express";
import changeEntryQuantity from "../controllers/changeEntryQuantity.controller.js";
import validateUser from "../middlewares/cart.middleware.js";

const router = Router();

router.put("/cart", validateUser, changeEntryQuantity);

export default router;
