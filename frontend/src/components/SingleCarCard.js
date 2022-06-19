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

const CarsRows = (props) => {

  const { car } = props;
  const [open, setOpen] = React.useState(false);

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
                { car.manufacturer } { car. model}
              </Typography>
              <Typography variant="body2" gutterBottom>
              chassisNumber: { car.chassisNumber }
              </Typography>
              <Typography variant="body2" gutterBottom>
              Year: { car.yearOfProduction }
              </Typography>
              <Typography variant="body2" gutterBottom>
              Fuel: { car.typeOfFuel }
              </Typography>
              <Typography variant="body2" gutterBottom>
              Type: { car.typeOfCar }
              </Typography>
              <Typography variant="body2" gutterBottom>
              Date of registration: { car.firstRegistration }
              </Typography>
              <Typography variant="body2" gutterBottom>
              
              </Typography>
       
              <Stack direction="row" spacing={2}>
              <Button variant="contained" endIcon={<EditIcon />}>
        Update
      </Button>

      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </Stack>
      </Paper>
      </Box>
            </Grid>
           
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