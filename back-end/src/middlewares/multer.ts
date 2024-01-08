import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadProjectPhoto = upload.single("image");
export const uploadWorkerPhoto = upload.single("avatar");
