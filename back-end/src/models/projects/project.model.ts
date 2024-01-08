import mongoose, { Document, Model } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface ProjectAttr {
  title: string;
  link: string;
  description: string;
  categories: string;
  feature: boolean;
  image: {
    public_id: string;
    url: string;
  };
}

// An interface that describes the properties
// that a Brand Model has
interface ProjectModel extends Model<ProjectDoc> {
  build(attrs: ProjectAttr): ProjectDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface ProjectDoc extends Document {
  title: string;
  link: string;
  categories: string;
  description: string;
  feature: boolean;
  image: {
    public_id: string;
    url: string;
  };
}

const projectSchema = new mongoose.Schema<ProjectAttr>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  feature: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  image: {
    public_id: String,
    url: String,
  },
});

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  "Project",
  projectSchema
);

export default Project;
