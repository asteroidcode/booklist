
import React, {useEffect} from 'react';
import {useStateValue} from '../../State/index';
import Button from "../../Components/Button";
import Middleware from '../../Api/Middleware';
import {statuses} from "../../State/statuses";

const BookList = () => {

  const [state, dispatch] = useStateValue();
  
  useEffect(() => {
    getBookList();
  }, []);

  const getBookList = async () => {
    dispatch({type: statuses.LOADING_BOOKS});
    const result = await Middleware({
      type: statuses.LOADING_BOOKS,
    });
    console.log("BL result", result)    
    dispatch({
      type: result.type,
      payload: result.data,
      code: result.code
    })  
  }
  
  if(state.bookliststatus === statuses.LOAD_BOOKS_SUCCESS) {
    return(
      <div>
        <p>List of Books</p>
        {state.BookList.map((book) => {
          return(
          <div key={book.id}>
            <hr/>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
          </div>)
      })
      }
      <Button text={state.BookString} onButtonPress={getBookList}/>
    </div>
  )}

  if(state.bookliststatus === statuses.LOADING_BOOKS) {
    return <p>Loading book list</p>
  }

  if(state.bookliststatus === statuses.LOAD_BOOKS_FAILED) {
    return(
      <>
        <p>List of books could not be loaded.</p>
        <Button text={"Try again"} onButtonPress={getBookList}/>
      </>
    )
  }

  return(
  <>
    <Button/>
    <div>No data</div>
  </>
  )
}

export default BookList;