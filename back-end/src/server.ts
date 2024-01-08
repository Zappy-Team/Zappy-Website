import dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";
dotenv.config();

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT REJECTION! Shutting down...");
  process.exit(1);
});

mongoose
  .connect(process.env.DATABASE!, {
    dbName: "Main",
  })
  .then(() => console.log("DB success"))
  .catch((e) => console.log(e));

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err: any) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});