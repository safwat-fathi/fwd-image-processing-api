// * express
import express, { Router } from "express";
// import { getImage } from "../controllers/image.controller";
// import { getImage } from "../middlewares/image.middleware";
// * routes
// import products from "./products.route";
import image from "./image.route";

const routes = Router();

// routes.use("/category", category);
routes.use("/image", image);
// routes.use("/image", getImage, express.static(process.cwd() + "/images"));

export default routes;
