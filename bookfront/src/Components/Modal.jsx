import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";

const Modal = ({isOpen, onClose, text}) => {
  return(
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={{margin: "10px 10px 10px 10px"}}>
        <br/>
        <Typography>{text}</Typography>
        <br/>
        <Button variant="contained" onClick={onClose}>OK</Button>
      </div>
    </Dialog>
  )
}

export default Modal;