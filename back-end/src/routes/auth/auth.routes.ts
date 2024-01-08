import { getUser, login, signUp } from "../../controllers/auth/auth.controller";
import express from "express";
import { protect } from "../../middlewares/protect";
import { getMe } from "../../middlewares/getUser";

const authRoute = express.Router();

authRoute.route("/login").post(login);
authRoute.route("/signup").post(signUp);

authRoute.get("/me", protect, getMe, getUser);

export default authRoute;
