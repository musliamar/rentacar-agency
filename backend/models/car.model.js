import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Car = db.define('Car', {

    chassisNumber: {
    type: DataTypes.STRING,
    allowNull: true
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true
    },
    yearOfProduction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    typeOfCar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    typeOfFuel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    firstRegistration: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  });

export default Car;