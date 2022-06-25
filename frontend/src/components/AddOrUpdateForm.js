import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
            <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const AddOrUpdateForm = (props) => {

    const { close, emptyData, data, retriever } = props;
    const fields = [];
    const [newData, setNewData] = useState();

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewData({ ...newData, [name]: value });
      retriever(newData);
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
        {fields}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={close}>
            Save changes
          </Button>
        </DialogActions>
      </>
)};

export default AddOrUpdateForm;