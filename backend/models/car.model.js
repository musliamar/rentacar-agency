import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Car = db.define('Car', {

    chassisNumber: {
    type: DataTypes.STRING,
    allowNull: false
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yearOfProduction: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    typeOfCar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    typeOfFuel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstRegistration: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });

export default Car;