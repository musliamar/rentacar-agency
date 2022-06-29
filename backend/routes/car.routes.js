import { 
    findCarById, 
    createCar, 
    deleteCar, 
    retrieveAllCars, 
    updateCar } 
from "../controllers/car.controller.js";

import express from 'express';

const router = express.Router();
  
router.get('/', retrieveAllCars);
router.get('/:id', findCarById);
router.post('/', createCar);
router.patch('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;