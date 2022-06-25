import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Service from '../http.js';
import CarCard from './SingleCarCard.js';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Form, { BootstrapDialog } from './AddOrUpdateForm.js';

const AllCars = () => {

  const title = 'All cars';
  const [cars, setCar] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
        getCars();
  }, []);
 
  const getCars = async () => {
      const carsFetch = await Service.getAllCars();
      setCar(carsFetch.data);
  }

  const retrieveNewData = (data) => {
    console.log(data);
  }

  const carFields = [
    {"name":"Chassis number"},
    {"name":"Manufacturer"},
    {"name":"Model"},
    {"name":"Year of production"},
    {"name":"Currently rented to"},
    {"name":"Type of car"},
    {"name":"Type of fuel"},
    {"name":"Date of registration"}];

  return (
    <>
      <Grid item xs={12} md={12}>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </Stack>

        <Stack justifyContent="right" direction="row" spacing={2}>
          <Button
          variant="contained"
          color="primary"
          endIcon={<AddIcon />}
          onClick={handleClickOpen}>
            Add car
          </Button>
        </Stack>
      </Grid>
      
      <Grid container item spacing={2}>  
        {cars.map((car) => (
          <CarCard key={car.chassisNumber} data={car} />
        ))}
      </Grid>

      <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}>
        <Form retriever={retrieveNewData} close={handleClose} emptyData={carFields} />
      </BootstrapDialog>
    </>
  );
}

AllCars.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllCars;
