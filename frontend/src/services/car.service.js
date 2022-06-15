import http from '../http.js';
import axios from 'axios';

export const getAllCars = async () => await axios.get('http://localhost:3300/cars');