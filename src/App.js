import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { database } from './firebase';
import './styles/App.css';
// import Navigation from './Navigation'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    //create a connection to root of db at root db.ref()
    database.ref().on('value', (snapshot) => {
      // this console log is everytime the db is changed it gives you the value
      //this.setState is goingt o update the component to whatever is currently in db
      // that was changed
      // console.log("CHANGE: ", snapshot.val() );
      this.setState({
        data: snapshot.val()
      });
    });
  };

  handleChange( e ) {
    e.preventDefault();
    const newData = e.target.value;
    this.setState({ newData });
  }

  handleSubmit( e ) {
    e.preventDefault();
    database.ref()
              .child('/menus').child('/entree')
              .push(this.state.newData)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <p>{JSON.stringify(this.state.data, null, 2)}</p>
        <form className='App-form' onSubmit={this.handleSubmit} >
          <input
            type='text'
            value={this.state.newData}
            onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  };
};



export default App;
