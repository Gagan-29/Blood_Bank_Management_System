import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  deleteDonarController,
  getDonarListController,
  getHospitalsListController,
  getOrganisationsListController,
} from "../controllers/adminController.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();
//get donar list
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarListController
);

router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalsListController
);

router.get(
  "/org-list",
  authMiddleware,
  adminMiddleware,
  getOrganisationsListController
);

//delete
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);
export default router;
