import express from 'express';
const router=express.Router();

import departmentRoutes from './departmentRoutes.js';

router.use("/departments", departmentRoutes);


export default router;
