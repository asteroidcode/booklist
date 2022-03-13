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
        case 'change BookString':
          return {
            ...state,
            BookString: action.newString
          };

          default: 
            return state;
      }
    }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <Button/>
          </a>
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
