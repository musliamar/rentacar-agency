import 'dotenv/config';
import express from 'express';
import { dbConnection } from './db.js';
import userRoutes from './routes/employee.routes.js';

const app = express();
const port = process.env.EXPRESS_PORT;

app.get('/', (req, res) => {
  res.send('This Rent-a-car backend works!');
});

app.listen(port, () => {
  console.log('Rent-a-car backend app listening on port ' + port);
});

dbConnection();

app.use('/users', userRoutes);

