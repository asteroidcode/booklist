import React, {useState} from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import {useStateValue} from '../../State/index';
import {statuses} from "../../State/statuses";
import Middleware from '../../Api/Middleware';

const ListAndFormLayout = () => {

  const [state, dispatch] = useStateValue();

  const [openBookItem, setOpenBookItem] = useState(null);

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

  return(
    <div className="flex-container">
      {openBookItem ? 
        <div style={{flexGrow: 5}}>
          <BookForm openItem={openBookItem} changeItem={setOpenBookItem} getBookList={getBookList}/>
        </div> : null}
      <div style={{flexGrow: 5}}>
        <BookList openItem={openBookItem} changeItem={setOpenBookItem} getBookList={getBookList}/>
      </div>
    </div>
  )
}

export default ListAndFormLayout;