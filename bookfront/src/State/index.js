import React, {createContext, useContext, useReducer} from 'react';
import { types } from './types';

//Thanks to Luke Hall's "State Management with React Hooks and Context API in 10 lines of code!" for the idea + code example on simple application state management
//at https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const initialState = {
  Books: {
    BookList: [],
    status: types.LOAD_BOOKS_INIT_VALUE
  },
  SaveNewBook: {
    status: types.SAVE_NEW_BOOK_INIT_VALUE
  },
  EditBook: {
    status: types.EDIT_BOOK_INIT_VALUE
  },
  DeleteBook: {
    status: types.DELETE_BOOK_INIT_VALUE
  }
}