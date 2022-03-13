
import React, {useState, useEffect} from 'react';
import {useStateValue} from '../../State/index';
import Button from "../../Components/Button";

const BookList = () => {

  const [state, dispatch] = useStateValue();
  console.log("Booklist");
  //useEffect(() => {
    //dispatch({type: 'LOAD_BOOKS'});
 // }, []);

  return(
    <div>
      <p>List of Books</p>
      <Button/>
    </div>
  )
}

export default BookList;