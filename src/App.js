import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { auth, database } from './firebase';
import './styles/App.css';
import CurrentUser from './components/CurrentUser'
import SignIn from './components/SignIn';
// import Navigation from './Navigation'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      menu: null,
      newMenu: ''
    };
    this.dataRef = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    auth.onAuthStateChanged( (currentUser) => {
      console.log('AUTH CHANGE', currentUser);
      this.setState( {currentUser} )
    });

    // this gives us access to the specific limb we want to add or take away from
    this.dataRef = database.ref('/menus')
    //create a connection to root of db at root db.ref()

    //*** need to use child_added here not value ***//
    this.dataRef.on('value', (snapshot) => {
      // this console log is everytime the db is changed it gives you the value
      //this.setState is goingt o update the component to whatever is currently in db
      // that was changed
      // console.log("CHANGE: ", snapshot.val() );

      //this needs to be tested against the value trying ****** to be sent for duplication
      // console.log( snapshot.child('entree').exists() );

      this.setState({
        menu: snapshot.val()
      });
    });
  };

  handleChange( e ) {
    e.preventDefault();
    const newMenu = e.target.value;
    this.setState({ newMenu });
  }

  handleSubmit( e ) {
    e.preventDefault();
    // ` string interpolation here to select which node we want to reference and change`
    //ALSO BRING CONLOG FROM ABOVE DOWN AND USE FOR VALIDATION
    this.dataRef.child('/sides')
              .push(this.state.newMenu)
    this.setState({ newMenu: '' });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <p>{JSON.stringify(this.state.menu, null, 2)}</p>
          <br />  <br />
          {/* //ternary with JUST ONE option */}
          { !currentUser && <SignIn />}
          { currentUser &&
            <div><CurrentUser user={currentUser} /> </div> }
          <br />  <br />
        <form className='App-form' onSubmit={this.handleSubmit} >
          <input
            placeholder="Enter name of menu item"
            type='text'
            value={this.state.newMenu}
            onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  };
};



export default App;
