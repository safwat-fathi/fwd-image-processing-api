import { Router } from "express";
import { getImage } from "../controllers/image.controller";

const image = Router();

// get image
image.get("/:filename?/:width?/:height?", getImage);

export default image;
