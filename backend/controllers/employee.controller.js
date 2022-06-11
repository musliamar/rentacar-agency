import Employee from '../models/employee.model.js';

export const findEmployeeById = async (req, res) => {
    
    const id = req.params.id;
    const employee = await Employee.findByPk(id);

    if(employee){
      res.send(employee);
    }else if(!employee){
      res.status(404).send({
        message: 'Cannot find employee with id=' + id
      });
    }else {
      res.status(500).send({
        message: 'Error retrieving employee with id=' + id
      });
    }
} 

export const retrieveAllEmployees = async (req, res) => {

}

export const deleteEmployee = async (req, res) => {

} 

export const createEmployee = async (req, res) => {

} 

export const updateEmployee = async (req, res) => {

} 

