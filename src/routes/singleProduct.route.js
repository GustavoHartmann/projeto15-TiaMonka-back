import { Router } from "express";
import getSingleProduct from "../controllers/getSingleProduct.controller.js";

const router = Router();

router.get("/product/:productId", getSingleProduct);

export default router;
