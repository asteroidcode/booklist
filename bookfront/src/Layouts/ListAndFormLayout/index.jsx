import React, {useState, useEffect} from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import {useStateValue} from '../../State/index';
import {types} from "../../State/types";
import Middleware from '../../Api/Middleware';
import Typography from "@mui/material/Typography";
import Modal from "../../Components/Modal";


const ListAndFormLayout = () => {

  const [state, dispatch] = useStateValue();

  const [openBookItem, setOpenBookItem] = useState(null);

  const [deleteFailNoti, setDeleteFailNoti] = useState(false);

  useEffect(() => {
    getBookList();
  }, []);

  const getBookList = async () => {
    dispatch({type: types.LOADING_BOOKS});
    const result = await Middleware({
      type: types.LOADING_BOOKS,
    }); 
    dispatch({
      type: result.type,
      payload: result.data
    })  
  }

  if (!openBookItem && state.Books?.BookList?.length > 0) {
    return(
      <>
        <Typography className="mainheader" component="h1" variant="h4">Books</Typography>
        <BookList openItem={openBookItem} changeItem={setOpenBookItem} getBookList={getBookList}/>
        <Modal isOpen={deleteFailNoti} onClose={() => setDeleteFailNoti(false)} text="Deleting the book failed"/>
      </>
    )
  }


  return(
    <>
      <Typography sx={{margin: "auto", marginTop: "20px"}} component="h1" variant="h4">Books</Typography>
        <div className="flex-container">   
          <div style={{flexGrow: 5}}>
            {(state.Books?.BookList?.length === 0) && 
              <>
                <Typography>No books on the list. Add new book?</Typography>
                <br/>
              </>
            }
            <BookForm openItem={openBookItem} changeItem={setOpenBookItem} getBookList={getBookList} showDeleteNoti={() => setDeleteFailNoti(true)}/>
          </div>
        <div style={{flexGrow: 5}}>
          <BookList openItem={openBookItem} changeItem={setOpenBookItem} getBookList={getBookList}/>
        </div>
      </div>
      
      <Modal isOpen={deleteFailNoti} onClose={() => setDeleteFailNoti(false)} text="Deleting the book failed"/>
    </>
  )
}

export default ListAndFormLayout;