import React from 'react';

const Button = ({text, onButtonPress}) => {
  
  return <button onClick={onButtonPress}>{text}</button>

}

export default Button;
