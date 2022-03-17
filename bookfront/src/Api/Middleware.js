
import {loadBookItems, saveNewBook, saveEditBook, deleteBook} from "./ServerApi";
import {types} from "../State/types";

const Middleware = async (action) => {

  //console.log("MIDDLEWARE ACTION", action);
  switch(action.type) {
    case types.LOADING_BOOKS:
      try {
        const res = await loadBookItems();
        //console.log("Middleware success", res);
        return({type: types.LOAD_BOOKS_SUCCESS, data: res});
      }
      catch (err) {
        console.log(err);
        return({type: types.LOAD_BOOKS_FAILED});
      }
    case types.SAVING_NEW_BOOK:
      try {
        const res = await saveNewBook(action);
        //console.log("Middleware success", res);
        return({type: types.SAVE_NEW_BOOK_SUCCESS, data: res});
      }
      catch (err) {
        console.log(err);
        return({type: types.SAVE_NEW_BOOK_FAILED});
      }
    case types.EDITING_BOOK:
      try {
        const res = await saveEditBook(action);
        //console.log("Middleware success", res);
        return({type: types.EDIT_BOOK_SUCCESS, data: res});
      }
      catch (err) {
        console.log(err);
        return({type: types.EDIT_BOOK_FAILED});
      }
    case types.DELETING_BOOK:
      try {
        const res = await deleteBook(action);
        //console.log("Middleware success", res);
        return({type: types.DELETE_BOOK_SUCCESS, data: res});
      }
      catch (err) {
        console.log(err);
        return({type: types.DELETE_BOOK_FAILED});
      }
    default:
  }
    
}

export default Middleware;