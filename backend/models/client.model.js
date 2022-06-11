import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

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
        allowNull: true
      },
    emailAddress: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });

export default Client;