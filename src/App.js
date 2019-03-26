import React, { Component } from 'react';


//Router
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

//Components
import NavBar from './components/App/NavBar.js'
import Home from './components/Home.js'
import Exercises from './components/Exercises.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Route path='/Exercises' component={Exercises} />
          <Route path='/Home' component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
