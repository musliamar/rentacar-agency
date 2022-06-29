import axios from 'axios';

const instance = axios.create({baseURL: 'http://localhost:3300/'});

const getAllCars = () => instance.get('cars');
const addNewCar = (data) => instance.post('cars', data);
const updateCar = (data) => instance.patch(`cars/${data.id}`, data);
const deleteCar = (data) => instance.delete(`cars/${data}`, data);
const getAllClients = () => instance.get('clients');

const Service = { getAllCars, addNewCar, getAllClients, updateCar, deleteCar };

export default Service;
