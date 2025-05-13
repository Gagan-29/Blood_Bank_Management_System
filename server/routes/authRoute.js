import express from "express";
import {
  registerController,
  loginController,
  currentUserController,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
//register || post
router.post("/register", registerController);
//login || post
router.post("/login", loginController);
//get current user
router.get("/current-user", authMiddleware, currentUserController);
export default router;
