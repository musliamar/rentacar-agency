import { 
    findEmployeeById, 
    createEmployee, 
    deleteEmployee, 
    retrieveAllEmployees, 
    updateEmployee } 
from "../controllers/employee.controller.js";

import express from 'express';

const router = express.Router();
  
router.get('/', retrieveAllEmployees);
router.get('/:id', findEmployeeById);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;