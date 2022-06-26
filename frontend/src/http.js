import axios from 'axios';

const instance = axios.create({baseURL: 'http://localhost:3300/'});

const getAllCars = () => instance.get('cars');
const addNewCar = (data) => instance.post('/cars', data);
const getAllClients = () => instance.get('clients');

const Service = { getAllCars, addNewCar, getAllClients };

export default Service;
