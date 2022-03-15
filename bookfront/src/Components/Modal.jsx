import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalMUI from '@mui/material/Modal';

const Modal = ({isOpen, onClose, text}) => {
  return(
    <ModalMUI
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <br/>
      <Typography>{text}</Typography>
      <br/>
      <Button onClick={onClose}>OK</Button>
    </ModalMUI>
  )
}

export default Modal;