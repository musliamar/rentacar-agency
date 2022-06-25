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

const AllClients = () => {

  const title = 'All clients';
  const [clients, setClient] = useState([]);
  
    useEffect(() => {
        getClients();
    }, []);
 
  const getClients = async () => {
      const clientsFetch = await Service.getAllClients();
      setClient(clientsFetch.data);
  }

  return (
    <>
  <Grid item xs={12} md={12}>

  <Stack direction="row" spacing={2}>
  <Typography 
          variant="h4" gutterBottom>
      {title}
    </Typography>
      
</Stack>

<Stack justifyContent="right" direction="row" spacing={2}>

<Button
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
       /*  onClick={handleOpenModal} */
      >
        New client
      </Button>

</Stack>
    
    </Grid>

    <Grid container item spacing={2}>  
    
          {clients.map((car) => (
            <CarCard key={car.chassisNumber} car={car} />
          ))}
    
    </Grid>


    </>
  );
}

AllClients.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllClients;
