import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './styles/logo.svg';
import './styles/App.css';
import Navigation from './Navigation'



class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
        <div>
        <button
            className="btn btn-default btn-success">
            Click here</button>
        </div>
      </div>
    );
  }
}

export default App;
