
import React, {useEffect} from 'react';
import {useStateValue} from '../../State/index';
import Button from "../../Components/Button";
import Middleware from '../../Api/Middleware';
import {statuses} from "../../State/statuses";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const BookList = ({openItem, changeItem}) => {

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
  
  const changeActiveBook = (bookId) => {
    if (openItem === bookId) {
      changeItem(null);
    }
    else {
      changeItem(bookId);
    }
  }

  if(state.bookliststatus === statuses.LOAD_BOOKS_SUCCESS) {
    return(
      <div>
        <Typography component="h1" variant="h5">List of Books</Typography>
        {state.BookList.map((book) => {
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

  if(state.bookliststatus === statuses.LOADING_BOOKS) {
    return <Typography>Loading book list</Typography>
  }

  if(state.bookliststatus === statuses.LOAD_BOOKS_FAILED) {
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