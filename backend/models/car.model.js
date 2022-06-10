import { DataTypes } from 'sequelize';
import db from '../db.js';

const Car = db.define('Car', {

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