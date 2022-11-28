import { Router } from "express";
import getCategories from "../controllers/getCategories.controller.js";

const router = Router();

router.get("/main", getCategories);

export default router;
