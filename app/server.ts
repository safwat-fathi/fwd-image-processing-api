import express, { Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
const app = express();
const port = 9000;

// use CORS
app.use(cors());
// use api routes
app.use("/api", routes);

app.get("/api", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "/api is live" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
