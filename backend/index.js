import express from 'express';
import { dbConnection } from './db/config.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This Rent-a-car backend works!');
});

app.listen(port, () => {
  console.log(`Rent-a-car backend app listening on port ${port}`);
});

dbConnection();