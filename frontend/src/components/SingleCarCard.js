import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Form, { BootstrapDialog } from './AddOrUpdateForm.js';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import dataHelper from '../data.helper.js';
import { revertData } from '../data.helper.js';
import Service from '../http.js';
import { Alert } from './AddOrUpdateForm.js';
import Snackbar from '@mui/material/Snackbar';

const CarsRows = (props) => {

  const { refresh, data } = props;
  const { id, createdAt, updatedAt, ...fieldsData } = data;

  const reducedData = dataHelper(fieldsData);
  const dialogTitle = 'Update car';
  const dialogButtonText = 'Save changes';

  const [newData, setNewData] = useState(reducedData);

  const [alert, setAlert] = useState({
    open: false,
    message: null,
    severity: null
  });

  const openSnackbar = (props) => setAlert({message: props.data.message, open: true, severity: props.data.severity});

  const [openForm, setOpenForm] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({open: false});
  };

  const handleCloseForm = () => setOpenForm(false);
  const retrieveNewData = (props) => setNewData(props);

  const handleOpenForm = () => {
    setOpenForm(true);
    setNewData(reducedData);
  };

  const updateCar = async () => {
    const revertedData = revertData(newData);
    revertedData.id = id;
    const response = await Service.updateCar(revertedData);
    handleCloseForm();
    refresh();
    openSnackbar(response);
  };

  const deleteCar = async () => {
    const response = await Service.deleteCar(id);
    refresh(response);
  };

  return (
          <>
            <Grid item xs={6} md={3}>
              <Box sx={{'& > :not(style)': {p: 2}}}>
                <Paper elevation={6}>
                  <Typography gutterBottom variant="subtitle1">
                    { reducedData['Manufacturer'] } { reducedData['Model'] }
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Chassis number: { reducedData['Chassis number'] }
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Year of production: { reducedData['Year of production'] }
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Type of fuel: { reducedData['Type of fuel'] }
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Type of car: { reducedData['Type of car'] }
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Date of registration: { reducedData['Date of registration'] }
                  </Typography> 

                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={handleOpenForm} endIcon={<EditIcon />}>
                      Update
                    </Button>
                    <Button variant="contained" color="error" onClick={deleteCar} startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </Stack>
                </Paper>
              </Box>
            </Grid>

            <BootstrapDialog 
            onClose={handleCloseForm}
            aria-labelledby="customized-dialog-title"
            open={openForm}>
              <Form 
              id={id}
              retriever={retrieveNewData} 
              close={handleCloseForm} 
              title={dialogTitle} 
              buttonText={dialogButtonText}
              data={reducedData} 
              action={updateCar} />
            </BootstrapDialog>

            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity={alert.severity} sx={{ width: '100%' }}>
                {alert.message}
              </Alert>
            </Snackbar>
          </>
  );

};

export default CarsRows;