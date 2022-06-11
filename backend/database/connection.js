import 'dotenv/config';
import { Sequelize } from 'sequelize';
import mariadb from 'mariadb/promise.js';

const [ host, port, user, password, database ] = [
    process.env.MARIADB_HOST,
    process.env.MARIADB_PORT,
    process.env.MARIADB_USERNAME,
    process.env.MARIADB_PASSWORD,
    process.env.MARIADB_DATABASE
];

export const connection = await mariadb.createConnection({host, port, user, password});
const sequelizeAuth = new Sequelize(database, user, password, {host: host, dialect: 'mariadb'});

export const createIfNotExists = async () => {
    await connection.query('CREATE DATABASE IF NOT EXISTS ' + database);
    console.log('MariaDB: Database created or already exists.')
}

export default sequelizeAuth;