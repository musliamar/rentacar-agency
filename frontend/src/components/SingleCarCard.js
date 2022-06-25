import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import Form, { modalStyle } from './AddOrUpdateForm.js';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';

const CarsRows = (props) => {

  const { data } = props;

  const { id, createdAt, updatedAt, ...fieldsData } = data;

  const keysToRename = {

    typeOfCar: 'Type of car',
    chassisNumber: 'Chassis number',
    currentlyRentedToClientId: 'Currently rented to',
    firstRegistration: 'Date of registration',
    manufacturer: 'Manufacturer',
    model: 'Model',
    typeOfFuel: 'Type of fuel',
    yearOfProduction: 'Year of production',
    
  };

  const renamedFieldKeys = Object.keys(fieldsData).reduce((newRenamedKeys, key) => {
    newRenamedKeys[keysToRename[key]] = fieldsData[key];
    return newRenamedKeys;
  }, {});

  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
   
         <>
            <Grid item xs={6} md={3}>
            <Box
      sx={{
       
        '& > :not(style)': {
         p: 2
        },
      }}
    >
      <Paper elevation={6}>
      
             <Typography gutterBottom variant="subtitle1">
                { renamedFieldKeys['Manufacturer'] } { renamedFieldKeys['Model'] }
              </Typography>
             <Typography variant="body2" gutterBottom>
              Chassis number: { data.chassisNumber }
              </Typography>
              <Typography variant="body2" gutterBottom>
              Year: { data.yearOfProduction }
              </Typography>
              <Typography variant="body2" gutterBottom>
              Fuel: { data.typeOfFuel }
              </Typography>
              <Typography variant="body2" gutterBottom>
              Type: { data.typeOfCar }
              </Typography>
              <Typography variant="body2" gutterBottom>
              Date of registration: { data.firstRegistration }
              </Typography>
              <Typography variant="body2" gutterBottom>
              
              </Typography>
       
              <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleOpenModal} endIcon={<EditIcon />}>
        Update
      </Button>

      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </Stack>
      </Paper>
      </Box>
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

           <Form data={renamedFieldKeys} />
          </Box>
        </Fade>
      </Modal>
      
            </>
  );

};
  

/* CarsRows.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
}; */

export default CarsRows;