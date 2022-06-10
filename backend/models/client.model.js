import { DataTypes } from 'sequelize';
import db from '../db.js';
import Car from './car.model.js';

const Client = db.define('Client', {

    idNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    citizenship: {
        type: DataTypes.STRING,
        allowNull: false
      },
    countryOfResidence: {
        type: DataTypes.STRING,
        allowNull: false
      },
    addressOfResidence: {
        type: DataTypes.STRING,
        allowNull: false
      },
    contactNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    emailAddress: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });

Client.hasMany(Car, {
    foreignKey: 'currentlyRentedToClientId'
  });

Car.hasOne(Client,  {
    foreignKey: 'currentlyRentedCarsIds'
  })


export default Client;