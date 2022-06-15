import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllCars } from '../services/car.service.js';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

const AllCars = () => {

  const title = 'All cars';
  const [cars, setCar] = useState([]);
 
    useEffect(() => {
        getCars();
    }, []);
 
    const getCars = async () => {
      const { cars } = getAllCars();
      console.log(cars);
      setCar(cars);
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
    
    {cars.map((car) => (
       
           <Typography key={car.id} component="h2" variant="h5">
             {car.model}
           </Typography>
  
      ))}
  </Grid>

  );
}

AllCars.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllCars;
