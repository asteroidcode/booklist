import React, {createContext, useContext, useReducer} from 'react';

//Thanks to Luke Hall's "State Management with React Hooks and Context API in 10 lines of code!" for the idea + code example on simple application state management
//at https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
//export const higherDispatch = Middleware(action, dispatch);
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const initialState = {
  BookList: [],
  BookString: "Books",
  bookliststatus: "NOT_LOADED",
  SaveNewBook: {
    status: "NOT_LOADED",
    code: undefined
  }
}