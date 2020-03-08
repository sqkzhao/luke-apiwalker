import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router'
import { navigate } from '@reach/router'
import axios from 'axios'
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
  })
  const onChangeHandler = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    setState({
        ...state,
        search: !state.search,
    })
  }
  const onClickHandler = (e) => {
    setState({
      ...state,
      category: "planets",
      search: !state.search
    })
  }
  useEffect(() => {
      axios.get(`https://swapi.co/api/${state.category}/${state.id}/`)
          .then(response => {
              console.log(response.data)
              setState({
                  ...state,
                  attributes: response.data
              })
              navigate(`/${state.category}`)
          })
          .catch(error => {
              navigate('/home')
          })
  }, [state.search])

  return (
    <div className="App">
      <SearchBar onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
      <div className="mt-5">
        <Router>
            <Home state={state} path="/home"/>
            <Planets state={state} setState={setState} path="/planets"/>
            <People state={state} setState={setState} onClickHandler={onClickHandler} path="/people"/>
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
