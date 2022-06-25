import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const AddOrUpdateForm = (props) => {

    const { emptyData, data } = props;
    const fields = [];
    const [newData, setNewData] = useState();

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewData({ ...newData, [name]: value });
      console.log(newData);
    };

    if (!data) {
      
      emptyData.map((field) => (
        fields.push(<TextField
          id="filled-helperText"
          label= {field.name}
          name = {field.name}
          defaultValue= 'Default text'
          onChange= {handleInputChange}
          helperText="Some important text"
          variant="filled" />)
      ))

    } else {

      for(const field in data){
      fields.push(<TextField
        id="filled-helperText"
        label= {field}
        name = {field}
        defaultValue= {data[field]}
        onChange= {handleInputChange}
        helperText="Some important text"
        variant="filled" />);
        
    }}
  

    return (
      <>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
      
     {fields}

     <TextField
        id="filled-helperText"
        label= 'oujea'
        defaultValue= 'test'
        onChange= {handleInputChange}
        helperText="Some important text"
        variant="filled" />

    </Box>

<Stack justifyContent="right" direction="row">
<Button
        variant="contained"
        color="primary"
        endIcon={<SaveIcon />}
        /* onClick={handleOpenModal} */
      >
        { !data ? 'Save new' : 'Save changes' }
      </Button></Stack>
</>
)};

export default AddOrUpdateForm;