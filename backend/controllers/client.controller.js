import Client from '../models/client.model.js';

export const retrieveAllClients = async (req, res) => {

  const data = await Client.findAll();
  data ? res.send(data) : res.status(404).send({message: 'Cannot retrieve clients'});

}

export const findClientById = async (req, res) => {
    
    const id = req.params.id;
    const client = await Client.findByPk(id);
    client ? res.send(client) : res.status(404).send({
      message: 'Error retrieving Client with id=' + id
    });
} 

export const deleteClient = async (req, res) => {

    const id = req.params.id;
    const client = await Client.findByPk(id);
    await client.destroy();

} 

export const createClient = async (req, res) => {

        await Client.create(req.body);
        res.send({
            message: 'Client added successfully!'
          });
    }


export const updateClient = async (req, res) => {

    await Client.update(req.body, {
        where: {
          id: req.body.id
        }
      });

} 

