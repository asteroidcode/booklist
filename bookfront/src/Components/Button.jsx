import React from 'react';
import {useStateValue} from "../State/";

const Button = () => {
  const [state, dispatch] = useStateValue();
  //const books = state[0].BookString;
  console.log("Button1", state);
  console.log("Button2", state.BookString);
  return(<div>
    <button onClick={() => dispatch({
      type: 'LOADING_BOOKS',
      //BookString: "newBookStringIsThis"
    })}>{state.BookString} Press this once</button>
    <p> Halloumi </p>
    </div>)
}

export default Button;
