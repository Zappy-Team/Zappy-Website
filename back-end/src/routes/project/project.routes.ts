import express from "express";
import { uploadProjectPhoto } from "../../middlewares/multer";
import {
  createProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from "../../controllers/project/project.controller";
import { protect } from "../../middlewares/protect";

const projectRoute = express.Router();

/* Main */
projectRoute
  .route("/")
  .get(getAllProjects)
  .post(protect, uploadProjectPhoto, createProject);
projectRoute
  .route("/:id")
  .patch(protect, uploadProjectPhoto, updateProject)
  .delete(protect, deleteProject);

export default projectRoute;
