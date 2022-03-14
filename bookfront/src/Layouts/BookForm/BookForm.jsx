import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "../../Components/Button";
import {useStateValue} from "../../State";

const BookForm = ({openItem, changeItem}) => {
  
  const [state] = useStateValue();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!openItem) {
      setTitle("");
      setAuthor("");
      setDescription("");
    }
    else {
      console.log("BookList ja openItem", state.BookList, openItem);
      if(state && state.BookList) {
        const activeBook = state.BookList.find(x => x.id === openItem)
        console.log("activeBook", activeBook);
        setTitle(activeBook.title);
        setAuthor(activeBook.author);
        setDescription(activeBook.description);
      }
    }
  }, [openItem]);

  return(

    <div>
      <TextField
        id="form-title"
        label="Title"
        value={title}
        helperText=""
        size="small"
      /><br/>
      <TextField
        id="form-author"
        label="Author"
        value={author}
        helperText=""
        size="small"
        sx={{marginTop: "1rem"}}
      /><br/>
      <TextField
        id="form-description"
        label="Description"
        value={description}
        helperText=""
        size="small"
        multiline
        fullWidth
        minRows={3}
        maxRows={10}
        sx={{marginTop: "1rem", marginBottom: "1rem", maxWidth:"600px"}}
      /><br/>
      <Button text="Save New" variant="contained" sxStyle={{margin: "2px"}}/>
      <Button text="Save" variant="contained" sxStyle={{margin: "2px"}}/>
      <Button text="Delete" variant="contained" sxStyle={{margin: "2px"}}/>
    </div>


  )
}

export default BookForm;