import mariadb from 'mariadb/promise.js';
import { Sequelize } from 'sequelize';

const [ host, port, user, password, database ] = [
    process.env.MARIADB_HOST,
    process.env.MARIADB_PORT,
    process.env.MARIADB_USERNAME,
    process.env.MARIADB_PASSWORD,
    process.env.MARIADB_DATABASE
];

const connection = await mariadb.createConnection({host, port, user, password});
const sequelizeAuth = new Sequelize(database, user, password, {host: host, dialect: 'mariadb'});

export const dbConnection = async () => {  

    await connection.query('CREATE DATABASE IF NOT EXISTS ' + database);
    console.log('MariaDB: Database created or already exists.')

    await sequelizeAuth.authenticate();
    console.log('Sequelize connection has been established successfully.');

    const Employee = await import('./models/employee.model.js');
    const Car = await import('./models/car.model.js');
    const Client = await import('./models/client.model.js');
    const Repair = await import('./models/carMaintenance.model.js');

    await sequelizeAuth.sync({ alter: true });
    console.log("All models were synchronized successfully.");

}

export default sequelizeAuth;