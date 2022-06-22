import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const modalStyle = {
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

  const carFields = [
    {"name":"Chassis number"},
    {"name":"Manufacturer"},
    {"name":"Model"},
    {"name":"Type"},
    {"name":"Fuel"},
    {"name":"First registration"}];

const AddOrUpdateForm = (props) => {

    const { data } = props;
    const fields = [];

    if (!data) {
      fields.push(<TextField
      id="filled-helperText"
      label= "Default label"
      defaultValue= "Default value"
      helperText="Some important text"
      variant="filled" />);
    } else {
      for(const field in data){
      fields.push(<TextField
        id="filled-helperText"
        label= {field}
        defaultValue= {data[field]}
        helperText="Some important text"
        variant="filled" />);
    }}
  

    return (

    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
      
     {fields}

    </Box>

)};

export default AddOrUpdateForm;