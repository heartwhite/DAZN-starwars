import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Film from './pages/Film';
import Character from './pages/Character';

function App() {
  return (
    <Router>
      <div className='app'>
        <header className='app-header'>
          <h1 className='big-header'>WELCOME TO STARWARS UNIVERSE</h1>
        </header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/film/:id'>
            <Film />
          </Route>
          <Route path='/character/:id'>
            <Character />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
