import { Router } from "express";
import getCategories from "../controllers/getCategories.js";

const router = Router();

router.get("/main", getCategories);

export default router;
