import { DataTypes } from 'sequelize';
import { sequelizeAuth } from './config.js';

export const User = sequelizeAuth.define('User', {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  export const Car = sequelizeAuth.define('Car', {

    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });