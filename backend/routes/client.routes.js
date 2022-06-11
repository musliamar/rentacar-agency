import { 
    findClientById, 
    createClient, 
    deleteClient, 
    retrieveAllClients, 
    updateClient } 
from "../controllers/client.controller.js";

import express from 'express';

const router = express.Router();
  
router.get('/', retrieveAllClients);
router.get('/:id', findClientById);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;