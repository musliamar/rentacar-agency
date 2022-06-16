import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CarService from '../services/car.service.js';
import CarsTable from './CarsRows.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CarsRows from './CarsRows.js';

const AllCars = () => {

  const title = 'All cars';
  const [cars, setCar] = useState([]);
 
    useEffect(() => {
        getCars();
    }, []);
 
    const getCars = async () => {
      const carsFetch = await CarService.getAllCars();
      setCar(carsFetch.data);
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
    
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Car manufacturer</TableCell>
            <TableCell align="right">Car model</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Fuel</TableCell>
            <TableCell align="right">Date of registration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <CarsRows key={car.chassisNumber} cars={cars} car={car} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

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
