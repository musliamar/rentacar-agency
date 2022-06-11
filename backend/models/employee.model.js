import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Employee = db.define('Employee', {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  export default Employee;