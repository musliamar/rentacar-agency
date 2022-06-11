import db, { createIfNotExists } from './connection.js';
import Employee from '../models/employee.model.js';
import Car from '../models/car.model.js'
import Client from '../models/client.model.js';
import Repair from '../models/carMaintenance.model.js';

Client.hasMany(Car, {
    foreignKey: 'currentlyRentedToClientId'
  });

Car.hasMany(Repair, {
    foreignKey: 'idOfRepairedCar'
  });

export const dbConnection = async () => {  

    createIfNotExists();

    await db.authenticate();
    console.log('Sequelize connection has been established successfully.');

    await db.sync({ alter: true });
    console.log("All models were synchronized successfully.");

}