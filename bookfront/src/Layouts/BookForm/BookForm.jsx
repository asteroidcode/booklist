import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "../../Components/Button";
import {useStateValue} from "../../State";
import Middleware from '../../Api/Middleware';
import {types} from "../../State/types";
import Modal from "../../Components/Modal";

const BookForm = ({openItem, changeItem, getBookList}) => {
  
  const [state, dispatch] = useStateValue();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [descriptionWarning, setDescriptionWarning] = useState("");

  const [newSaveActive, setNewSaveActive] = useState(false);

  useEffect(() => {
    if (!openItem) {
      setTitle("");
      setAuthor("");
      setDescription("");
    }
    else {
      //console.log("BookList ja openItem", state.BookList, openItem);
      if(state && state.BookList) {
        const activeBook = state.BookList.find(x => x.id === openItem)
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
      setNewSaveActive(true);
    }
    else {
      setNewSaveActive(false);
    }
  }, [title, author, description]);


  const saveNewBook = async () => {
    if(title.length < 201 && author.length < 201 && description.length < 5001) {

      dispatch({type: types.SAVING_NEW_BOOK});
      const result = await Middleware({
        type: types.SAVING_NEW_BOOK,
        payload: {
          Title: title,
          Author: author,
          Description: description
        }
      });
      dispatch({
        type: result.type,
        payload: result.data
      })  

      if (result.type === types.SAVE_NEW_BOOK_SUCCESS ||
        result.type === types.SAVE_NEW_BOOK_FAILED) {
          getBookList();
        }
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
        <Button text="Save New" disabled={!newSaveActive} onButtonPress={saveNewBook} variant="contained" sxStyle={{margin: "2px"}}/>
        <Button text="Save" variant="contained" onButtonPress={saveEditBook} sxStyle={{margin: "2px"}}/>
        <Button text="Delete" variant="contained" onButtonPress={deleteBook} sxStyle={{margin: "2px"}}/>
      </div>

    </div>

  )
}

export default BookForm;