import express from "express";
import { authenticationToken } from "../auth/auth.js";
import {
  addDepartment,
  getAllDepartments,
  removeDepartment,
} from "../controller/departmentController.js";
const router = express.Router();

router.route("/add-new-department").post(authenticationToken, addDepartment);
router
  .route("/remove-department")
  .delete(authenticationToken, removeDepartment);
router
  .route("/get-all-departments")
  .get(authenticationToken, getAllDepartments);

export default router;
