import express from 'express';
const router=express.Router();

import { getAllDepartments } from '../controllers/departmentController.js';

router.get("/get-all-departments", getAllDepartments)

export default router;
