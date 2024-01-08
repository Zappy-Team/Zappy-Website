import { NextFunction } from "express";
import mongoose, { Document, Model, Query } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface WorkerContentAttr {
  name: string;
  title: string;
  description: string;
  lang: string;
  worker_id: mongoose.Types.ObjectId;
}

// An interface that describes the properties
// that a Brand Model has
interface WorkerContentModel extends Model<WorkerContentDoc> {
  build(attrs: WorkerContentAttr): WorkerContentDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface WorkerContentDoc extends Document {
  name: string;
  title: string;
  description: string;
  lang: string;
  worker_id: mongoose.Types.ObjectId;
}

const workerContentSchema = new mongoose.Schema<WorkerContentAttr>({
  name: {
    type: String,
    required: [true, "An Attorney must have a name"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "An Attorney must have a title"],
  },
  description: {
    type: String,
    required: [true, "An Attorney must have a description"],
  },
  lang: {
    type: String,
    required: [true, "An Attorney must have a language"],
    enum: {
      values: ["en", "ge"],
      message: "You have to choose only: English or Georgian",
    },
  },
  worker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
    required: [true, "Please, add Worker id"],
  },
});

workerContentSchema.pre(/^find/, function (next: NextFunction) {
  const query = this as Query<WorkerContentDoc[], WorkerContentDoc>;

  query.populate({
    path: "worker_id",
    select: "avatar",
  });

  next();
});

const WorkerContent = mongoose.model<WorkerContentDoc, WorkerContentModel>(
  "WorkerContent",
  workerContentSchema
);

export default WorkerContent;
