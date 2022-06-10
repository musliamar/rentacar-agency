import { DataTypes } from 'sequelize';
import db from '../db.js';

const Employee = db.define('Employee', {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  export default Employee;