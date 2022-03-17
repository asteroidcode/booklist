import axios from 'axios';

export const loadBookItems = async () => {
  const response = await axios.get('api/BookItems');
  return(response);
  }

export const saveNewBook = async (action) => {
  const response = await axios.post('api/BookItems', {
    Title: action.payload.Title,
    Author: action.payload.Author,
    Description: action.payload.Description
  }
  );
  return(response);
}

export const saveEditBook = async (action) => {
  const address = 'api/BookItems/'+action.payload.Id;
  const response = await axios.put(address, {
    Id: action.payload.Id,
    Title: action.payload.Title,
    Author: action.payload.Author,
    Description: action.payload.Description
  });
  return(response);
}

export const deleteBook = async (action) => {
  const response = await axios.delete('api/BookItems/'+action.payload.Id);
  return(response);
}