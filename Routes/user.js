import { Router } from "express";
import { registerUser, loginUser } from "../Controllers/user.js";

export const userRouter = Router();
userRouter.post("/users/register", registerUser);
userRouter.post("/users/login", loginUser);
