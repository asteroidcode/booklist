import React, {useState} from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import {useStateValue} from '../../State/index';
import {types} from "../../State/types";
import Middleware from '../../Api/Middleware';

const ListAndFormLayout = () => {

  const [state, dispatch] = useStateValue();

  const [openBookItem, setOpenBookItem] = useState(null);

  const getBookList = async () => {
    dispatch({type: types.LOADING_BOOKS});
    const result = await Middleware({
      type: types.LOADING_BOOKS,
    }); 
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
          <BookForm openItem={openBookItem} getBookList={getBookList}/>
        </div> : null}
      <div style={{flexGrow: 5}}>
        <BookList openItem={openBookItem} changeItem={setOpenBookItem} getBookList={getBookList}/>
      </div>
    </div>
  )
}

export default ListAndFormLayout;