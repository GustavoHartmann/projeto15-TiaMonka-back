import { Router } from "express";
import getProductsByCategory from "../controllers/getProductsByCategory.controller.js";

const router = Router();

router.get("/category/:category", getProductsByCategory);

export default router;
