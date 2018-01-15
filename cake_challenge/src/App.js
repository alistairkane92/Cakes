import React, { Component } from 'react';
import Main from './container/Main'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CakeSubmit from './components/CakeSubmit'
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Main}/>
          <Route path="/submit" component={CakeSubmit}/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
