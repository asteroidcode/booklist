import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "../../Components/Button";
import {useStateValue} from "../../State";
import Typography from "@mui/material/Typography";

const BookForm = ({openItem, changeItem}) => {
  
  const [state] = useStateValue();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [descriptionWarning, setDescriptionWarning] = useState("");

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

  useEffect(() => {
    if (description && description.length > 5000) {
      setDescriptionWarning("Over the character limit ");
      console.log("settingwarning")
    }
    else {
      setDescriptionWarning("");
    }
  }, [description]);


  return(

    <div>
      <TextField
        id="form-title"
        label="Title"
        value={title}
        helperText=""
        size="small"
        onChange={(e) => setTitle(e.target.value)}
      /><br/>
      <TextField
        id="form-author"
        label="Author"
        value={author}
        helperText=""
        size="small"
        sx={{marginTop: "1rem"}}
        onChange={(e) => setAuthor(e.target.value)}
      /><br/>
      <TextField
        id="form-description"
        label="Description"
        value={description}
        size="small"
        multiline
        fullWidth
        minRows={3}
        maxRows={10}
        sx={{marginTop: "1rem", marginBottom: "1rem", maxWidth:"600px"}}
        onChange={(e) => setDescription(e.target.value)}
      />{descriptionWarning}
      { description && <span>{description.length + " / 5000"}</span> }
     <br/>
      <Button text="Save New" variant="contained" sxStyle={{margin: "2px"}}/>
      <Button text="Save" variant="contained" sxStyle={{margin: "2px"}}/>
      <Button text="Delete" variant="contained" sxStyle={{margin: "2px"}}/>
    </div>


  )
}

export default BookForm;