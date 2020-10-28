/***************************************************************************/
/**Basics imports**/
/***************************************************************************/
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/***************************************************************************/
/**Component imports**/
/***************************************************************************/
import Header from './components/Header';
import WeatherApp from './components/weather/WeatherApp';
import PaginationPage from './components/pagination/PaginationPage';
import Infinite from './components/infiniteScroll/Infinite';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weather" component={WeatherApp} />
          <Route path="/pagination" component={PaginationPage} />
          <Route path="/infinite" component={Infinite} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <div className="container">
        This is example react projects page
      </div>
    </div>
  )
}

export default App;


