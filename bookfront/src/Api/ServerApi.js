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
    Title: action.payload.Title,
    Author: action.payload.Author,
    Description: action.payload.Description
  }
  );
  console.log(response);  
  return(response);
}

export const saveEditBook = async (action) => {
  console.log("action saveEditBook", action);
  const address = 'api/BookItems/'+action.payload.Id;
  const response = await axios.put(address, {
    Id: action.payload.Id,
    Title: action.payload.Title,
    Author: action.payload.Author,
    Description: action.payload.Description
  });
  console.log(response);  
  return(response);
}

export const deleteBook = async (action) => {
  console.log("action deleteBook", action);
  const response = await axios.delete('api/BookItems/'+action.payload.Id);
  console.log(response);  
  return(response);
}