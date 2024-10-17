import express, { Application, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import cors from "cors";
import { ProductRoutes } from "./modules/product/productRoute";

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
const port = 3013;


app.use(express.json());

app.use("/api", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("welcome to travella server side");
  });
  
  // Not Found Route Handler
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "Route not found",
    });
  });
  
  app.use((err: any, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred",
    });
  });

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
