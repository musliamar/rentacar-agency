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
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Form, { modalStyle } from './AddOrUpdateForm.js';
import CloseIcon from '@mui/icons-material/Close';

const AllClients = () => {

  const title = 'All clients';
  const [clients, setClient] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
        onClick={handleOpenModal}
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

    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={modalStyle}>
          <Stack justifyContent="right" direction="row">
          <Button variant="contained" color="error" onClick={handleCloseModal} startIcon={<CloseIcon />}>
        Close
      </Button></Stack>

           <Form />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

AllClients.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllClients;
