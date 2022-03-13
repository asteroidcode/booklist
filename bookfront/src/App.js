import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";
import {StateProvider} from './State/index';

function App() {

    const initialState = {
      BookList: [],
      BookString: "Books",
    }

    const reducer = (state, action) => {
      switch (action.type) {
        case 'changeBookString':
          return {
            ...state,
            BookString: action.BookString
          };

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
