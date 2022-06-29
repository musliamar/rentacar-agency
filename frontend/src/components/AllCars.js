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
import { revertData } from '../data.helper.js';

const AllCars = () => {

  const title = 'All cars';
  const dialogTitle = 'Add new car';
  const dialogButtonText = 'Save new car';

  const initialNewData = { 
    "Type of car": null,
    "Chassis number": null,
    "Currently rented to": null,
    "Date of registration": null,
    "Manufacturer": null,
    "Model": null,
    "Type of fuel": null,
    "Year of production": null}

  const [cars, setCars] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [newData, setNewData] = useState(initialNewData);

  useEffect(() => {
    getCars();
  }, []);

  const handleClose = () => setOpenForm(false);
  const retrieveNewData = (data) => setNewData(data);

  const handleClickOpen = () => {
    setOpenForm(true);
    setNewData(initialNewData);
  };
 
  const getCars = async () => {
    const carsFetch = await Service.getAllCars();
    setCars(carsFetch.data);
  }
  
  const newCar = async () => {
    const revertedData = revertData(newData);
    await Service.addNewCar(revertedData);
    handleClose();
  }

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
      open={openForm}>
        <Form 
        retriever={retrieveNewData} 
        close={handleClose} 
        title={dialogTitle}
        action={newCar} 
        buttonText={dialogButtonText}
        initialData={initialNewData}
       />
      </BootstrapDialog>
    </>
  );
}

AllCars.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllCars;
