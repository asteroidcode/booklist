
import React, {useEffect} from 'react';
import {useStateValue} from '../../State/index';
import Button from "../../Components/Button";
import {types} from "../../State/types";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const BookList = ({openItem, changeItem, getBookList}) => {

  const [state] = useStateValue();
  
  useEffect(() => {
    getBookList();
  }, []);

  const changeActiveBook = (bookId) => {
    if (openItem === bookId) {
      changeItem(null);
    }
    else {
      changeItem(bookId);
    }
  }

  if(state.Books.status === types.LOAD_BOOKS_SUCCESS) {
    return(
      <div>
        <Typography component="h1" variant="h5">List of Books</Typography>
        {state.Books.BookList.map((book) => {
          return(
          <div style={book.id === openItem ? {backgroundColor: "#eeeeee"} : {}} key={book.id}>
            <hr style={{maxWidth: "300px"}}/>
            <ButtonBase onClick={() => changeActiveBook(book.id)}>
              <Typography>
              Title: {book.title}<br/>
              Author: {book.author}
              </Typography>
            </ButtonBase>
          </div>)
      })
      }
      <hr style={{maxWidth: "300px"}}/>
    </div>
  )}

  if(state.Books.status === types.LOADING_BOOKS) {
    return <Typography>Loading book list</Typography>
  }

  if(state.Books.status === types.LOAD_BOOKS_FAILED) {
    return(
      <>
        <Typography>List of books could not be loaded.</Typography>
        <Button text={"Try again"} onButtonPress={getBookList}/>
      </>
    )
  }

  return(
  <>
    <Button text={"Get book list"} onButtonPress={getBookList}/>
    <div>No data</div>
  </>
  )
}

export default BookList;