import {types} from "../State/types";

export const reducer = (state, action) => {

  console.log("App.js, action", action);
  
  switch (action.type) {
    case types.LOADING_BOOKS:
      return {
        ...state,
        Books: {
          status: action.type
        }
      }
    case types.LOAD_BOOKS_SUCCESS: 
      return {
        ...state,
        Books: {
          BookList: action.payload.data,
          status: action.type,
        }
      }
    case types.LOAD_BOOKS_FAILED:
      return {
        ...state,
        Books: {
          BookList: [],
          status: action.type,
        }
      }
  //SAVE NEW BOOK    
    case types.SAVING_NEW_BOOK:
      return {
        ...state,
        SaveNewBook: {
          status: action.type
        }
      }
    case types.SAVE_NEW_BOOK_SUCCESS: 
      return {
        ...state,
        SaveNewBook: {
          status: action.type,
        }
      }
    case types.SAVE_NEW_BOOK_FAILED:
      return {
        ...state,
        SaveNewBook: {
          status: action.type
        }
      }
  //EDIT BOOK
    case types.EDITING_BOOK:
      return {
        ...state,
        EditBook: {
          status: action.type
        }
      }
    case types.EDIT_BOOK_SUCCESS:
      return {
        ...state,
        EditBook: {
          status: action.type
        }
      }
    case types.EDIT_BOOK_FAILED:
      return {
        ...state,
        EditBook: {
          status: action.type
        }
      }
  //DELETE BOOK
    case types.DELETING_BOOK:
      return {
        ...state,
        DeleteBook: {
          status: action.type
        }
      }
    case types.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        DeleteBook: {
          status: action.type
        }
      }
    case types.DELETE_BOOK_FAILED:
      return {
        ...state,
        DeleteBook: {
          status: action.type
        }
      }

    default: 
      return state;
  }
}