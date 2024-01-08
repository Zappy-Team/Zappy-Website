import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "../common/factory.controller";
import { catchAsync } from "../../utils/catchAsync";
import cloudinary from "../../middlewares/cloudinary";
import AppError from "../../utils/appError";
import Worker from "../../models/worker/worker.model";
import WorkerContent from "../../models/worker/content.model";
import mongoose from "mongoose";

/* Main */
export const getAllWorkers = getAll(Worker);
export const getWorkerById = getOne(Worker);

export const createWorker = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    let createdData = req.body;

    const data = await Worker.create(createdData);

    if (req.file) {
      const tempDirPath = path.join(__dirname, "../images/worker");
      /* If not exist */
      if (!fs.existsSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, { recursive: true });
      }

      const tempFilePath = tempDirPath + "/" + req.file.originalname;

      fs.writeFileSync(tempFilePath, req.file.buffer);

      const cloudUpload = await cloudinary.uploader.upload(tempFilePath, {
        folder: "Zappy/Worker",
      });

      const cloudImage = {
        public_id: cloudUpload.public_id,
        url: cloudUpload.secure_url,
      };

      data.avatar = cloudImage;
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

export const updateWorker = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    let updatedData = { ...body };

    const data = await Worker.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return next(new AppError("No document found with that ID", 404));
    }

    if (req.file) {
      const tempDirPath = path.join(__dirname, "../images/worker");
      /* If not exist */
      if (!fs.existsSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, { recursive: true });
      }

      const tempFilePath = tempDirPath + "/" + req.file.originalname;

      fs.writeFileSync(tempFilePath, req.file.buffer);

      const cloudUpload = await cloudinary.uploader.upload(tempFilePath, {
        folder: "Zappy/Worker",
      });

      if (data.avatar?.public_id) {
        await cloudinary.uploader.destroy(data.avatar.public_id);
      }

      const cloudImage = {
        public_id: cloudUpload.public_id,
        url: cloudUpload.secure_url,
      };

      data.avatar = cloudImage;
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
export const deleteWorker = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const data = await Worker.findById(req.params.id).session(session);

      if (!data) {
        return next(new AppError("No Document found with that ID", 404));
      }
      if (data.avatar?.public_id) {
        await cloudinary.uploader.destroy(data.avatar.public_id);
      }

      await WorkerContent.find({ worker_id: data.id })
        .deleteMany()
        .session(session);

      await Worker.deleteOne().session(session);
      await session.commitTransaction();

      res.status(204).json({
        status: "success",
      });
    } catch (error) {
      await session.abortTransaction();
      next(error);
    } finally {
      session.endSession();
    }
  }
);

/* Content */
export const getAllWorkerContent = getAll(WorkerContent);
export const getOneWorkerContent = getOne(WorkerContent);
export const createWorkerContent = createOne(WorkerContent);
export const updateWorkerContent = updateOne(WorkerContent);
export const deleteWorkerContent = deleteOne(WorkerContent);
