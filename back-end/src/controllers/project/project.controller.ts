import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { getAll, getOne } from "../common/factory.controller";
import Project from "../../models/projects/project.model";
import { catchAsync } from "../../utils/catchAsync";
import cloudinary from "../../middlewares/cloudinary";
import AppError from "../../utils/appError";

/* Main */
export const getAllProjects = getAll(Project);
export const getProjectById = getOne(Project);

export const createProject = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    let createdData = req.body;

    const data = await Project.create(createdData);

    if (req.file) {
      const tempDirPath = path.join(__dirname, "../images/project");
      /* If not exist */
      if (!fs.existsSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, { recursive: true });
      }

      const tempFilePath = tempDirPath + "/" + req.file.originalname;

      fs.writeFileSync(tempFilePath, req.file.buffer);

      const cloudUpload = await cloudinary.uploader.upload(tempFilePath, {
        folder: "Zappy/Project",
      });

      const cloudImage = {
        public_id: cloudUpload.public_id,
        url: cloudUpload.secure_url,
      };

      data.image = cloudImage;
      data.save({ validateBeforeSave: false });

      // Remove the temporary file after uploading to Cloudinary
      fs.unlink(tempFilePath, () => {});
    }

    res.status(201).json({
      status: "success",
      data,
    });
  }
);

export const updateProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    let updatedData = { ...body };

    const data = await Project.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return next(new AppError("No document found with that ID", 404));
    }

    if (req.file) {
      const tempDirPath = path.join(__dirname, "../images/project");
      /* If not exist */
      if (!fs.existsSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, { recursive: true });
      }

      const tempFilePath = tempDirPath + "/" + req.file.originalname;

      fs.writeFileSync(tempFilePath, req.file.buffer);

      const cloudUpload = await cloudinary.uploader.upload(tempFilePath, {
        folder: "Zappy/Project",
      });

      if (data.image?.public_id) {
        await cloudinary.uploader.destroy(data.image.public_id);
      }

      const cloudImage = {
        public_id: cloudUpload.public_id,
        url: cloudUpload.secure_url,
      };

      data.image = cloudImage;
      data.save({ validateBeforeSave: false });

      // Remove the temporary file after uploading to Cloudinary
      fs.unlink(tempFilePath, () => {});
    }

    res.status(200).json({
      status: "success",
      data,
    });
  }
);
export const deleteProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await Project.findById(req.params.id);

    if (!data) {
      return next(new AppError("No Document found with that ID", 404));
    }
    if (data.image?.public_id) {
      await cloudinary.uploader.destroy(data.image.public_id);
    }

    await data.deleteOne();

    res.status(204).json({
      status: "success",
    });
  }
);
