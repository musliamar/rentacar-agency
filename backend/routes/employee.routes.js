import { findEmployeeById } from "../controllers/employee.controller.js";
import express from 'express';

const router = express.Router();
  
router.get('/:id', findEmployeeById);

export default router;