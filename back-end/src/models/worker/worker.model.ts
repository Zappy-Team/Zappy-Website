import mongoose, { Document, Model } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface WorkerAttr {
  name: string;
  avatar: {
    public_id: string;
    url: string;
  };
}

// An interface that describes the properties
// that a Brand Model has
interface WorkerModel extends Model<WorkerDoc> {
  build(attrs: WorkerAttr): WorkerDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface WorkerDoc extends Document {
  name: string;
  avatar: {
    public_id: string;
    url: string;
  };
}

const workerSchema = new mongoose.Schema<WorkerAttr>({
  name: {
    type: String,
    required: [true, "Worker needs Name"],
  },
  avatar: {
    public_id: String,
    url: String,
  },
});

const Worker = mongoose.model<WorkerDoc, WorkerModel>("Worker", workerSchema);

export default Worker;
