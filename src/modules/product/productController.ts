import { PrismaClient } from "@prisma/client";
import catchAsync from "../../utils/catchAsync";
const prisma = new PrismaClient();

const createProducts = catchAsync(async (req, res) => {
  const { title, category, price } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        title,
        category,
        price,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Error creating product" });
  }
});

export const ProductsController = {
  createProducts,
};
