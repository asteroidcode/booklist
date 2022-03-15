
import {loadBookItems, saveNewBook} from "./ServerApi";
import {statuses} from "../State/statuses";

const Middleware = async (action) => {

  console.log("ACTION MIDDLEWARE", action);
  switch(action.type) {
    case statuses.LOADING_BOOKS:
      try {
        const res = await loadBookItems();
        console.log("Middleware success", res);
        return({type: statuses.LOAD_BOOKS_SUCCESS, data: res, code: res.status});
      }
      catch (err) {
        console.log(err);
        return({type: statuses.LOAD_BOOKS_FAILED, data: [], code: err.response});
      }
    case statuses.SAVING_NEW_BOOK:
      console.log("3", action.payload)
      try {
        const res = await saveNewBook(action);
        console.log("Middleware success", res);
        return({type: statuses.SAVE_NEW_BOOK_SUCCESS, data: res, code: res.status});
      }
      catch (err) {
        console.log(err);
        return({type: statuses.SAVE_NEW_BOOK_FAILED, data: [], code: err.response});
      }
    default:
      return(action);
  }
    
}

export default Middleware;