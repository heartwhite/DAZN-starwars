import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppPage } from './components/styledComponents';

import './App.css';
import Home from './pages/Home';
import Film from './pages/Film';
import Character from './pages/Character';

function App() {
  return (
    <Router>
      <AppPage>
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
      </AppPage>
    </Router>
  );
}

export default App;
