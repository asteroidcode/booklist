import './App.css';
import {StateProvider} from './State/index';
import ListAndFormLayout from "./Layouts/ListAndFormLayout/";
import {reducer} from "./Reducers/reducer";
import {initialState} from "./State/";

function App() {

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <ListAndFormLayout/>
      </div>
    </StateProvider>
  );
}

export default App;
