// * express
import { Router } from "express";
// * routes
// import products from "./products.route";
import image from "./image";

const routes = Router();

// routes.use("/category", category);
routes.use("/image", image);

export default routes;
