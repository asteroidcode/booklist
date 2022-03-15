import {statuses} from "../State/statuses";

export const reducer = (state, action) => {

  console.log("App.js state, action", state, action);
  
  switch (action.type) {
    case statuses.LOADING_BOOKS:
      return {
        ...state,
        bookliststatus: action.type
      }
    case statuses.LOAD_BOOKS_SUCCESS: 
      console.log("HIT IT", action.payload.data)
      return {
        ...state,
        BookList: action.payload.data,
        bookliststatus: action.type,
        code: action.code
      }
    case statuses.LOAD_BOOKS_FAILED:
      return {
        ...state,
        BookList: [],
        bookliststatus: action.type,
        code: action.code
      }
  //SAVE NEW BOOK    
    case statuses.SAVING_NEW_BOOK:
      return {
        ...state,
        SaveNewBook: {
          status: action.type
        }
      }
    case statuses.SAVE_NEW_BOOK_SUCCESS: 
      console.log("HIT IT", action.payload.data)
      return {
        ...state,
        SaveNewBook: {
          status: action.type,
          code: action.code,
        }
      }
    case statuses.SAVE_NEW_BOOK_FAILED:
      return {
        ...state,
        SaveNewBook: {
          status: action.type,
          code: action.code
        }
      }


    default: 
      return state;
  }
}