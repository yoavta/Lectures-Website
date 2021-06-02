import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'

const LinearPage = () => (
  <div>
    <h1>אלגברה לינארית 1</h1>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
      <Route  excat  path='/linear1' component={LinearPage} />
      <Route   path='/' component={HomePage} />
    </Switch>
    </div>
  );
}

export default App;
