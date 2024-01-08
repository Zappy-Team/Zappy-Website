import express from "express";
import {
  createWorkerContent,
  deleteWorker,
  getAllWorkerContent,
  updateWorkerContent,
} from "../../controllers/workers/worker.controller";
const workerContentRouter = express.Router();

/* Main */
workerContentRouter
  .route("/")
  .get(getAllWorkerContent)
  .post(createWorkerContent);
workerContentRouter
  .route("/:id")
  .patch(updateWorkerContent)
  .delete(deleteWorker);

export default workerContentRouter;
