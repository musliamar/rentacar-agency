import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Repair = db.define('Repair', {

    descOfRepair: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });

export default Repair;