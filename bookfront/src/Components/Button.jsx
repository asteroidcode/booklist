import React from 'react';
import ButtonMUI from "@mui/material/Button";

const Button = ({text, onButtonPress, disabled, sxStyle, variant}) => {
  
  return (
  <ButtonMUI 
    variant={variant ? variant : "outlined"} 
    disabled={disabled ? true : false} 
    onClick={onButtonPress}
    size="small"
    sx={sxStyle}
  >
    {text}
  </ButtonMUI>
  )
}

export default Button;
