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

const CarsRows = (props) => {

  const { data } = props;
  const { id, createdAt, updatedAt, ...fieldsData } = data;
  const reducedData = dataHelper(fieldsData);

  const retrieveNewData = (newData) => {
    console.log(newData);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
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
                    <Button variant="contained" onClick={handleClickOpen} endIcon={<EditIcon />}>
                      Update
                    </Button>
                    <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </Stack>
                </Paper>
              </Box>
            </Grid>

            <BootstrapDialog 
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}>
              <Form retriever={retrieveNewData} close={handleClose} data={reducedData} />
            </BootstrapDialog>
          </>
  );

};

export default CarsRows;