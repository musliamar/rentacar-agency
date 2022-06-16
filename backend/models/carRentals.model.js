import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Rental = db.define('Rental');

export default Rental;