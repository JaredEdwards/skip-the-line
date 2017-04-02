import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { database } from './firebase';
import './styles/App.css';
// import Navigation from './Navigation'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  };

  componentDidMount() {
    //create a connection to root of db at root db.ref()
    database.ref().on('value', (snapshot) => {
      // this console log is everytime the db is changed it gives you the value
      // that was changed
      // console.log("CHANGE: ", snapshot.val() );
      this.setState({
        data: snapshot.val()
      });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <p>{JSON.stringify(this.state.data, null, 2)}</p>
      </div>
    );
  };
};



export default App;
