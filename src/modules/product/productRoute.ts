import express from "express";
import { ProductsController } from "./productController";
const router = express.Router();

router.post("/create-product", ProductsController.createProducts);

export const ProductRoutes = router;