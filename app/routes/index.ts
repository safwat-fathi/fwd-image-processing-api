// * express
import { Router } from "express";
// * routes
import image from "./image.route";

const routes = Router();

routes.use("/image", image);

export default routes;
