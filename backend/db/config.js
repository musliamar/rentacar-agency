import 'dotenv/config';
import mariadb from 'mariadb/promise.js';
import { Sequelize } from 'sequelize';

const [ host, port, user, password, database ] = [
    process.env.REACT_APP_MARIADB_HOST,
    process.env.REACT_APP_MARIADB_PORT,
    process.env.REACT_APP_MARIADB_USERNAME,
    process.env.REACT_APP_MARIADB_PASSWORD,
    process.env.REACT_APP_MARIADB_DATABASE
];

const connection = await mariadb.createConnection({host, port, user, password});
export const sequelizeAuth = new Sequelize(database, user, password, {host: host, dialect: 'mariadb'});

export const dbConnection = async () => {  

    try {
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        console.log('MariaDB: Database created or already exists.')
        sequelizeConnection();
    } catch (error) {
        console.error('MariaDB is unable to connect to the database:', error);
    }

}

const sequelizeConnection = async () => {

    try {
        await sequelizeAuth.authenticate();
        console.log('Sequelize connection has been established successfully.');
        const { User, Car } = await import('./models.js');
        await sequelizeAuth.sync({ alter: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error('Sequelize is unable to connect to database:', error);
    }

}