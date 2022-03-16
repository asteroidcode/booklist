
import React, { useEffect } from 'react';
import {useStateValue} from '../../State/index';
import Button from "../../Components/Button";
import {types} from "../../State/types";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const BookList = ({openItem, changeItem, getBookList}) => {

  const [state] = useStateValue();

  
  useEffect(() => {
    console.log("state", state);
  }, [state])

  const changeActiveBook = (bookId) => {
    if (openItem === bookId) {
      changeItem(null);
    }
    else {
      changeItem(bookId);
    }
  }


  if(state.Books.status === types.LOAD_BOOKS_SUCCESS){
    return(
      <BookListSuccess 
        openItem={openItem}
        changeActiveBook={changeActiveBook}
        booksdata={state.Books}
      />
    )
  }

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

const StyledHr = () => {
  return( <hr style={{maxWidth: "300px"}}/>)
}

export const BookListSuccess = ({openItem, changeActiveBook, booksdata}) => {

  return(
    <div>
      <Typography component="h1" variant="h5">List</Typography>
      {booksdata.BookList.map((book, index) => {
        return(
          <div style={book.id === openItem ? {backgroundColor: "#eeeeee"} : {}} key={book.id}>
           <StyledHr/>
            <ButtonBase onClick={() => changeActiveBook(book.id)}>
              <Typography variant="body2"><span data-testid={"booktitle-" + index}>{book.title}</span><br/>
              <span data-testid={"bookauthor-" + index}>By: {book.author}</span></Typography>
            </ButtonBase>
          </div>
        )
        })
        }
      <StyledHr/>
    </div>
  )

}

export default BookList;