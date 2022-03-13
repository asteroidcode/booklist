import React from 'react';
import {useStateValue} from "../State/";

const Button = () => {
  const state = useStateValue();
  const books = state[0].BookString;
  console.log(state);
  console.log(state[0].BookString);
  return(<div><p>{books} Halloumi </p></div>)
}

export default Button;
