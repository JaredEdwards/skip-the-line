import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { auth, database } from './firebase';
import './styles/App.css';
import map from 'lodash/map';
import CurrentUser from './components/CurrentUser';
import SignIn from './components/SignIn';
import MenuDiv from './components/Menu';
import MenuItemDisplay from './components/MenuItemDisplay';
import AddToMenu from './components/AddToMenu';
import createFragment from 'react-addons-create-fragment'; // ES6

// import Navigation from './Navigation'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      menu: null,
      newMenu: '',
      menuToDisplay: 'menus'
    };

    let menuToDisplay = this.state.menuToDisplay;
    this.menuRef = database.ref(`/${menuToDisplay}`);
  }; // END OF CONSTRUCTOR

  componentDidMount() {
    auth.onAuthStateChanged( (currentUser) => {
      this.setState( {currentUser} )
      this.menuRef.on('value', (snapshot) => {
        // console.log( snapshot.val() );
        this.setState({
          menuItems: snapshot.val()
        });
      });
    }); //END OF AUTSTATECHANGED

//Get a snapshot of the current state of the database
    this.menuRef.on('value', (snapshot) => {
      this.setState({
        menu: snapshot.val()
      });
    });

  }; //END OF COMPONENT DID MOUNT

  render() {
    const { currentUser, menuItems, menu } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Skip the Line</h2>
        </div>
          { !currentUser && <SignIn />}
          { currentUser &&
        <div>
          <CurrentUser user={currentUser} />
          <br />  <br />

          <code>Map over these elements </code>
          {
            map(menuItems, (item, key) =>  {
            return (
              <MenuDiv
                key={key}
                itemName={key} />
              ) //end return
            })
          }
        </div>
        }
        <br /><br />

        {/* <AddToMenu menu={this.state.menuItems}  /> */}
      </div>
    );
  };
}; //END OF APP COMPONENT



export default App;
