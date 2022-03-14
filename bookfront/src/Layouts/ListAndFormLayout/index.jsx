import React, {useEffect, useState} from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

const ListAndFormLayout = () => {
  return(
    <div className="flex-container">
      <div style={{flexGrow: 5}}><BookList/></div>
      <div style={{flexGrow: 5}}><BookForm/></div>
    </div>
  )
}

export default ListAndFormLayout;