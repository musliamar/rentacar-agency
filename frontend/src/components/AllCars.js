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
import DeleteIcon from '@mui/icons-material/Delete';

const AllCars = () => {

  const title = 'All cars';
  const [cars, setCar] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 
    useEffect(() => {
        getCars();
    }, []);
 
  const getCars = async () => {
      const carsFetch = await Service.getAllCars();
      setCar(carsFetch.data);
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
        Add car
      </Button>

</Stack>
    
    </Grid>

    <Grid container item spacing={2}>  
    
          {cars.map((car) => (
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
          <Button variant="contained" color="error" onClick={handleCloseModal} startIcon={<DeleteIcon />}>
        Close
      </Button>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add or update car
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              This modal will be for updating or adding cars.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

AllCars.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default AllCars;
