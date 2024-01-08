import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { errorController } from "./controllers/error/error.controller";
import authRoute from "./routes/auth/auth.routes";
import projectRoute from "./routes/project/project.routes";
import workerRouter from "./routes/worker/worker.routes";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "https://www.zappydev.pro",
      "https://zappydev.pro",
    ],
  })
);

app.options("*", cors());

app.use(express.json());

/* Routes */
app.use("/api/v1/user", authRoute);
app.use("/api/v1/project", projectRoute);
app.use("/api/v1/worker", workerRouter);

app.use(errorController);

export default app;
