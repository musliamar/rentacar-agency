import express from 'express';
import cors from 'cors';
import connection from './database/db.js';
import employeeRoutes from './routes/employee.routes.js';
import carRoutes from './routes/car.routes.js';
import clientRoutes from './routes/client.routes.js';

const app = express();
const port = process.env.EXPRESS_PORT;

app.get('/', (req, res) => {
  res.send('This Rent-a-car backend works!');
});

app.listen(port, () => {
  console.log('Rent-a-car backend app listening on port ' + port);
});

connection();

app.use(cors());
app.use(express.json());
app.use('/employees', employeeRoutes);
app.use('/clients', clientRoutes);
app.use('/cars', carRoutes);

