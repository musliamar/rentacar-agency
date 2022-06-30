import * as React from 'react';
import { forwardRef } from 'react';
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
import MuiAlert from '@mui/material/Alert';

export const Alert = forwardRef((props, ref) => 
<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  );

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiPaper-root': {
    maxWidth: 800,
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
 /*  onClose: PropTypes.func.isRequired, */
};

const AddOrUpdateForm = (props) => {

    const { action, title, buttonText, close, initialData, data, retriever } = props;
    const [newData, setNewData] = useState(initialData);
    const fields = [];
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewData({ ...newData, [name]: value });
      retriever(newData);
    };

    if (!data) {
      for(const field in initialData){
        fields.push(<TextField
          id="outlined-basic" 
          variant="outlined"
          key= {field}
          label= {field}
          name = {field}
          sx={{ m: 1, width: 300 }}
          defaultValue= {initialData[field]}
          onChange= {handleInputChange}
          onMouseLeave = {handleInputChange} />)}
      } else {
        for(const field in data){
          fields.push(<TextField
          id="outlined-basic" 
          variant="outlined"
          key={field}
          label= {field}
          name = {field}
          sx={{ m: 1, width: 300 }}
          defaultValue= {data[field]}
          onChange= {handleInputChange}
          onMouseLeave = {handleInputChange} />)}
      }

    return (
      <>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
        {fields}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={action}>
            {buttonText}
          </Button>
        </DialogActions>
      </>
)};

export default AddOrUpdateForm;