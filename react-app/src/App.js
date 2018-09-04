import React, { Component } from 'react';
import './assets/css/index.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import About from './components/pages/about';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <Route exact path="/" component = {HomePage} />
          <Route exact path="/About" component = {About} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
