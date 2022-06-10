import { DataTypes } from 'sequelize';
import db from '../db.js';

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