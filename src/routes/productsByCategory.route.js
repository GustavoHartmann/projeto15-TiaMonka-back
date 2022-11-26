import { Router } from "express";
import getProductsByCategory from "../controllers/getProductsByCategory.js";

const router = Router();

router.get("/products/:category", getProductsByCategory);

export default router;
