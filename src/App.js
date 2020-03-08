import React, {useState} from 'react';
import { Router } from '@reach/router'
import SearchBar from './components/SearchBar'
import Planets from './components/Planets'
import People from './components/People'
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Films from './components/Films';
import Species from './components/Species';
import Home from './components/Home';
import './App.css';

function App() {
  const [state, setState] = useState({
    category: "people",
    id: 1,
    search: false,
    attributes: [],
    homeId: ""
  })
  return (
    <div className="App">
      <SearchBar state={state} setState={setState}/>
      <div className="mt-5">
        <Router>
            <Home path="/home"/>
            <Planets state={state} setState={setState} path="/planets"/>
            <People state={state} setState={setState} path="/people"/>
            <Starships attributes={state.attributes} path="/starships"/>
            <Vehicles attributes={state.attributes} path="/vehicles"/>
            <Films attributes={state.attributes} path="/films"/>
            <Species attributes={state.attributes} path="/species"/>
        </Router>
      </div>
    </div>
  );
}

export default App;
