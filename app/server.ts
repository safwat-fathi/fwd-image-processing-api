import express from "express";
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

// listen to working port
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
