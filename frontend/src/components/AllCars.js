import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CarService from '../services/car.service.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CarCard from './SingleCarCard.js';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

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

  const classes = useStyles();

  return (
    <>
  <Grid item xs={12} md={8}>
    <Typography 
          variant="h4" gutterBottom>
      {title}
    </Typography>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<AddIcon />}
        href="/cars/add"
      >
        Add car
      </Button>
    </Grid>

    <Grid item xs={12} md={8}>  
    <Grid container spacing={4}>
          {cars.map((car) => (
            <CarCard key={car.chassisNumber} car={car} />
          ))}
    </Grid>
    </Grid>
    </>
  );
}

AllCars.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllCars;
