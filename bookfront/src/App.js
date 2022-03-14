import './App.css';
import {StateProvider} from './State/index';
import BookList from "./Layouts/BookList/BookList";
import {reducer} from "./Reducers/reducer";
import {initialState} from "./State/";

function App() {

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">
          <BookList/>
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
