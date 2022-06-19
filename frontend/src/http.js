import axios from 'axios';

const instance = axios.create({baseURL: 'http://localhost:3300/'});

const getAllCars = () => instance.get('cars');
const getAllClients = () => instance.get('clients');

const Service = { getAllCars, getAllClients };

export default Service;
