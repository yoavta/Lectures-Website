import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import CoursePage from './pages/course/course.component';
import Header from './components/header/header-component';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/course' component={CoursePage} />
      </Switch>
    </div>
  );
}

export default App;