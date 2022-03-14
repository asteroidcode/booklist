import axios from 'axios';

export const loadBookItems = async () => {
    console.log("loadbookitems")
      const response = await axios.get('api/BookItems');
      console.log(response);  
      return(response);
  }

