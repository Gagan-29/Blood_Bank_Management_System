import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { bloodGroupDetailsController } from "../controllers/analyticsController.js";

const router = express.Router();

//GET blood data
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);

export default router;
