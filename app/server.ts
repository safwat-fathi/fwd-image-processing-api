import express from "express";
import cors from "cors";
import routes from "./routes";
const app = express();
const port = 9000;

// use CORS
app.use(cors());
// use api routes
app.use("/api", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
