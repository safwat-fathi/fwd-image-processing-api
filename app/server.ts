import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
// TODO: add cors
// TODO: add .env file and import dotenv
const app = express();
const port = 9000;

// use CORS
app.use(cors());
// use api routes
app.use("/api", routes);

// const getImageData = async () => {};
// const getImage = async (req: Request, res: Response, next: NextFunction) => {
//   console.log(req.url);
//   // const metadata = await sharp(req.path).metadata();
//   next();
// };

// app.use("/api/image", getImage, express.static(process.cwd() + "/images"));
// app.use("/api/image", express.static(process.cwd() + "/images"));
// app.get("/api/image/:file", getImage);
// listen to working port
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
