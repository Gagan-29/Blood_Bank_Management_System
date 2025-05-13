import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createInventoryController,
  getDonarsController,
  getDonarsInitialController,
  getHospitalController,
  getHospitalInitialController,
  getInventoryController,
  getInventoryHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getRecentInventoryController,
} from "../controllers/inventoryController.js";
const router = express.Router();

//ADD Inventory  || POST Method
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);
//GET RECENT  RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//GET ALL consumer RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//GET Donars RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);
//GET Donars RECORDS initially for adding inventories
router.get("/get-donars-initial", authMiddleware, getDonarsInitialController);

//GET Hospital RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);
//GET Hospital RECORDS initially for adding inventories
router.get(
  "/get-hospitals-initial",
  authMiddleware,
  getHospitalInitialController
);

//GET organisation RECORDS
router.get("/get-organisation", authMiddleware, getOrganisationController);

//GET organisation RECORDS for hospital
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);
export default router;
