import Client from '../models/client.model.js';

export const findClientById = async (req, res) => {
    
    const id = req.params.id;
    const client = await Client.findByPk(id);

    if(client){
      res.send(client);
    }else if(!client){
      res.status(404).send({
        message: 'Cannot find client with id=' + id
      });
    }else {
      res.status(500).send({
        message: 'Error retrieving client with id=' + id
      });
    }
} 

export const retrieveAllClients = async (req, res) => {

}

export const deleteClient = async (req, res) => {

} 

export const createClient = async (req, res) => {

} 

export const updateClient = async (req, res) => {

} 

