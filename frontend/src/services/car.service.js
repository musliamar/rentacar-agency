import http from '../http.js';

const getAllCars = () => http.get('cars');

const CarService = { getAllCars };

export default CarService;