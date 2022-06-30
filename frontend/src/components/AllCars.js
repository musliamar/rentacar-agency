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
import { Alert } from './AddOrUpdateForm.js';
import Snackbar from '@mui/material/Snackbar';

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

  const handleCloseForm = () => setOpenForm(false);
  const retrieveNewData = (data) => setNewData(data);

  const handleClickOpen = () => {
    setOpenForm(true);
    setNewData(initialNewData);
  };

  const [alert, setAlert] = useState({
    open: false,
    message: null,
    severity: null
  });

  const openSnackbar = (props) => setAlert({message: props.data.message, open: true, severity: props.data.severity});

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({open: false});
  };
 
  const getCars = async () => {
    const carsFetch = await Service.getAllCars();
    setCars(carsFetch.data);
  }

  const refresh = async (props) => {
    getCars();
    openSnackbar(props);
  }
  
  const newCar = async () => {
    const revertedData = revertData(newData);
    const response = await Service.addNewCar(revertedData);
    if(response.data.severity ==='success'){
      handleCloseForm();
      openSnackbar(response);
      getCars();
    }else{
      openSnackbar(response);
    }
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
          <CarCard refresh={refresh} key={car.chassisNumber} data={car} />
        ))}
      </Grid>

      <BootstrapDialog
      onClose={handleCloseForm}
      aria-labelledby="customized-dialog-title"
      open={openForm}>
        <Form 
        retriever={retrieveNewData} 
        close={handleCloseForm} 
        title={dialogTitle}
        action={newCar} 
        buttonText={dialogButtonText}
        initialData={initialNewData}
       />
      </BootstrapDialog>

      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity={alert.severity} sx={{ width: '100%' }}>
                {alert.message}
              </Alert>
      </Snackbar>
    </>
  );
}

AllCars.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllCars;
