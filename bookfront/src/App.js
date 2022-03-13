import Middleware from './Api/Middleware';
import './App.css';
import Button from "./Components/Button";
import {StateProvider} from './State/index';

function App() {

    const initialState = {
      BookList: [],
      BookString: "Books",
      bookliststatus: "NOT_LOADED"
    }

    const reducer = (state, action) => {

      console.log("App.js state, action", state, action);
      const action2 = new Middleware(state, action).sw(state, action);
      console.log("App.js action2", action2);

      switch (action2.type) {
        case 'changeBookString':
          return {
            ...state,
            BookString: action2.BookString
          };
        case 'LOADING_BOOKS':
          return {
            ...state,
            bookliststatus: "BookList LOADING"
          }
        case 'LOAD_BOOKS_SUCCESS': 
          return {
            ...state,
            BookList: action2.BookList,
            bookliststatus: "BookList SUCCESS"
          }
          default: 
            return state;
      }
    }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">
        <Button/>
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
