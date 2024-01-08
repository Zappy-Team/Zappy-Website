import express from "express";
import { uploadWorkerPhoto } from "../../middlewares/multer";
import { protect } from "../../middlewares/protect";
import {
  createWorker,
  deleteWorker,
  getAllWorkers,
  updateWorker,
} from "../../controllers/workers/worker.controller";
import workerContentRouter from "./workerContent.routes";

const workerRouter = express.Router();

workerRouter.use("/content", workerContentRouter);

/* Main */
workerRouter
  .route("/")
  .get(getAllWorkers)
  .post(protect, uploadWorkerPhoto, createWorker);
workerRouter
  .route("/:id")
  .patch(protect, uploadWorkerPhoto, updateWorker)
  .delete(protect, deleteWorker);

export default workerRouter;
