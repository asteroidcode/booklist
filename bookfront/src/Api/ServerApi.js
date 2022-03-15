import axios from 'axios';

export const loadBookItems = async () => {
  console.log("loadbookitems")
  const response = await axios.get('api/BookItems');
  console.log(response);  
  return(response);
  }

export const saveNewBook = async (action) => {
  console.log("action saveNewBook", action);
  const response = await axios.post('api/BookItems', {
    Title: action.payload.title,
    Author: action.payload.author,
    Description: action.payload.description
  }
  );
  console.log(response);  
  return(response);
}
