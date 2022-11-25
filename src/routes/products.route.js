import { Router } from "express";
import getFixedProductsData from "../controllers/getFixedProductsData.controller.js";

const router = Router();

router.get("/products/:category", getFixedProductsData);

export default router;
