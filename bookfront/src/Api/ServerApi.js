import axios from 'axios';

export const loadBookItems = async () => {
    console.log("loadbookitems")
    try {
      const response = await axios.get('api/BookItems');
      console.log(response);  
      return(response);
    }
    catch (error) {
      console.error(error);
      return(error);
    }
  }

