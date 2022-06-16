import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CarService from '../services/car.service.js';
import CarsTable from './CarsTable.js';

const AllCars = () => {

  const title = 'All cars';
  const [cars, setCar] = useState([]);
 
    useEffect(() => {
        getCars();
    }, []);
 
    const getCars = async () => {
      const cars = await CarService.getAllCars();
      setCar(cars.data);
    }

  return (

  <Grid item xs={12}md={8} sx={{'& .markdown': {py: 3,},}}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>

    <Link to="/cars/add">Add cars</Link>
    <Link to="/cars/:id">Single cars</Link>
    <Link to="/cars">All cars</Link>

    <Divider />
    
    <CarsTable />
    
    {/* {cars.map((car) => (
       
           <Typography key={car.id} component="h2" variant="h5">
             {car.model}
           </Typography>
  
      ))} */}
  </Grid>

  );
}

AllCars.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllCars;
