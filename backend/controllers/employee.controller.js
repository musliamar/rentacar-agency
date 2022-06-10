import Employee from '../models/employee.model.js';

export const findEmployeeById = async (req, res) => {
    
    const id = req.params.id;

    const user = await Employee.findByPk(id);

    if(user){
      res.send(user);
    }else if(!user){
      res.status(404).send({
        message: 'Cannot find user with id=' + id
      });
    }else {
      res.status(500).send({
        message: 'Error retrieving user with id=' + id
      });
    }
} 