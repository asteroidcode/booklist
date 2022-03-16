import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "../../Components/Button";
import {useStateValue} from "../../State";
import Middleware from '../../Api/Middleware';
import {types} from "../../State/types";
import Modal from "../../Components/Modal";

const BookForm = ({openItem, getBookList}) => {
  
  const [state, dispatch] = useStateValue();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [descriptionWarning, setDescriptionWarning] = useState("");

  const [newSaveEnabled, setNewSaveEnabled] = useState(false);
  const [saveEditEnabled, setSaveEditEnabled] = useState(false);
  const [deleteActive, setDeleteActive] = useState(false);

  const [savingNew, setSavingNew] = useState(false);
  const [savingEditedBook, setSavingEditedBook] = useState(false);
  const [deletingBook, setDeletingBook] = useState(false);

  useEffect(() => {
    if (!openItem) {
      setTitle("");
      setAuthor("");
      setDescription("");
    }
    else {
      if(state && state.Books.BookList) {
        const activeBook = state.Books.BookList.find(x => x.id === openItem)
        console.log("activeBook", activeBook);
        setTitle(activeBook.title);
        setAuthor(activeBook.author);
        setDescription(activeBook.description);
      }
    }
  }, [openItem]);

  useEffect(() => {
    if (description && description.length > 5000) {
      setDescriptionWarning("Over the character limit ");
    }
    else {
      setDescriptionWarning("");
    }
  }, [description]);

  useEffect(() => {
    if ( title.length > 0 && author.length > 0 && description.length > -1 &&
      title.length < 201 && author.length < 201 && description.length < 5001) {  
      setNewSaveEnabled(true);
      setSaveEditEnabled(true);
    }
    else {
      setNewSaveEnabled(false);
      setSaveEditEnabled(false);
    }
  }, [title, author, description]);


  const saveNewBook = async () => {
    if(title.length < 201 && author.length < 201 && description.length < 5001) {

      dispatch({type: types.SAVING_NEW_BOOK});
      const result = await Middleware({
        type: types.SAVING_NEW_BOOK,
        payload: {
          Id: openItem,
          Title: title,
          Author: author,
          Description: description
        }
      });
      dispatch({
        type: result.type,
        payload: result.data
      })  

      //if (result.type === types.SAVE_NEW_BOOK_SUCCESS ||
      //  result.type === types.SAVE_NEW_BOOK_FAILED) {
          getBookList();
      //  }
    }
  }

  const saveEditBook = async () => {
    if(title.length < 201 && author.length < 201 && description.length < 5001) { 
  
      dispatch({type: types.EDITING_BOOK});
      const result = await Middleware({
        type: types.EDITING_BOOK,
        payload: {
          Id: openItem,
          Title: title,
          Author: author,
          Description: description
        }
      });
      dispatch({
        type: result.type,
        payload: result.data,
      }) 
      getBookList();
    }
  }

  const deleteBook = async () => {

    dispatch({type: types.DELETING_BOOK});
    const result = await Middleware({
      type: types.DELETING_BOOK,
      payload: {
        Id: openItem
      }
    });
    dispatch({
      type: result.type,
      payload: result.data
    }) 
    getBookList();
  }

  return(

    <div>
      <TextField
        id="form-title"
        label="Title"
        value={title}
        helperText=""
        size="small"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      { title && <span>{title.length + " / 200"}</span> }
      <br/>
      <TextField
        id="form-author"
        label="Author"
        value={author}
        helperText=""
        size="small"
        sx={{marginTop: "1rem"}}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br/>
      { author && <span>{author.length + " / 200"}</span> }
      <br/>
      <TextField
        id="form-description"
        label="Description"
        value={description}
        size="small"
        multiline
        fullWidth
        minRows={3}
        maxRows={10}
        sx={{marginTop: "1rem", maxWidth:"400px"}}
        onChange={(e) => setDescription(e.target.value)}
      />
      { description && <p>{description.length + " / 5000"}</p> }
      {descriptionWarning}
      <br/>
      <div style={{marginTop:"10px"}}>
        <Button text="Save New" disabled={!(newSaveEnabled || state.SaveNewBook.status !== types.SAVING_NEW_BOOK)} onButtonPress={saveNewBook} variant="contained" sxStyle={{margin: "2px"}}/>
        <Button text="Save" disabled={!(saveEditEnabled || state.EditBook.status !== types.EDITING_BOOK)} variant="contained" onButtonPress={saveEditBook} sxStyle={{margin: "2px"}}/>
        <Button text="Delete" disabled={state.DeleteBook.status === types.DELETING_BOOK} variant="contained" onButtonPress={deleteBook} sxStyle={{margin: "2px"}}/>
      </div>

    </div>

  )
}

export default BookForm;