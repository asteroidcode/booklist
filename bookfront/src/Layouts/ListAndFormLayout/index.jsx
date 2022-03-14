import React, {useState} from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

const ListAndFormLayout = () => {

  const [openBookItem, setOpenBookItem] = useState(null);

  return(
    <div className="flex-container">
      {openBookItem ? 
        <div style={{flexGrow: 5}}>
          <BookForm openItem={openBookItem} changeItem={setOpenBookItem}/>
        </div> : null}
      <div style={{flexGrow: 5}}>
        <BookList openItem={openBookItem} changeItem={setOpenBookItem}/>
      </div>
    </div>
  )
}

export default ListAndFormLayout;