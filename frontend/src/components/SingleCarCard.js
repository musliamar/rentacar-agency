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
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const CarsRows = (props) => {

  const { car } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
   
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
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
            </Grid>
            <Grid item>
            <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<EditIcon />}
        href="#contained-buttons"
      >
        Update car
      </Button>

      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        href="#contained-buttons"
      >
        Delete car
      </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  

   /* <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {car.manufacturer}
        </TableCell>
        <TableCell align="right">{car.model}</TableCell>
        <TableCell align="right">{car.typeOfCar}</TableCell>
        <TableCell align="right">{car.typeOfFuel}</TableCell>
        <TableCell align="right">{car.firstRegistration}</TableCell>
        <TableCell align="right">Modify car Remove car</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>

          <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Other details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Chassis number</TableCell>
                    <TableCell>Year of production</TableCell>
              
                  </TableRow>
                </TableHead>
                <TableBody>
                 
                    <TableRow key={car.chassisNumber}>
                      <TableCell component="th" scope="row">
                        {car.chassisNumber}
                      </TableCell>
                      <TableCell>{car.yearOfProduction}</TableCell>
                    </TableRow>
  
                </TableBody>
              </Table>
            </Box>

            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {car.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * car.yearOfProduction * 100) / 100}
                      </TableCell>
                    </TableRow>
               ))} 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment> 
                  ); */
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