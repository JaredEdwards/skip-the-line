import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { auth, database } from './firebase';
import './styles/App.css';
import map from 'lodash/map';
import CurrentUser from './components/CurrentUser'
import SignIn from './components/SignIn';

import createFragment from 'react-addons-create-fragment' // ES6

// import Navigation from './Navigation'

class MenuDiv extends Component {
  constructor(props) {
    super(props);
  }

  seeMenuItems( e ) {
    console.log('clicked');
  }
  render() {
    const { itemName, seeMenuItems } = this.props;
    // console.log(this.props);
    return (
      <div className="menuItem">
        {itemName}
        <br />
        <button
          onClick={this.seeMenuItems}
          >See Category Items</button>

      </div>
    )
  }
} //END OF MENUDIV COMPONENT

class MenuItemDiv extends Component {
  render() {
    const itemArray = createFragment(this.props.itemName);
    return (
      <div className="menuItem">
        {
          map(itemArray, (key, item) => {
            return (
              <div key={key}>
                {key}
                <button>+</button>
                <button>-</button>
              </div>
            )//end of map return
          })
        }
      </div>
    ) // END OF RETURN
  }
} //END OF MenuItemDiv COMPONENT

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      menu: null,
      newMenu: '',
      menuToDisplay: 'menus'
    };
    //this variable needs to be change and set depending on what they would like to add or remove from the menu.interpolation on /menus that corresponds with button click.
    //  ************************ //
    let menuToDisplay = this.state.menuToDisplay;
    this.menuRef = database.ref(`/${menuToDisplay}`);
    // this.menuRef = database.ref(`/menus/desserts`);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.selectMenu = this.selectMenu.bind(this);
  };

  componentDidMount() {
    auth.onAuthStateChanged( (currentUser) => {
      // console.log('AUTH CHANGE', currentUser);
      this.setState( {currentUser} )
      this.menuRef.on('value', (snapshot) => {
        // console.log( snapshot.val() );
        this.setState({
          menuItems: snapshot.val()
        });

      });
    }); //END OF AUTSTATECHANGED

    // this gives us access to the specific limb we want to add or take away from
    // this.menuRef = database.ref('/menus')
    //create a connection to root of db at root db.ref()
    //*** need to use child_added here not value ***//
    // this console log is everytime the db is changed it gives you the value
    //this.setState is goingt o update the component to whatever is currently in db
    // that was changed
    // console.log("CHANGE: ", snapshot.val() );
    //this needs to be tested against the value trying ****** to be sent for duplication
    // console.log( snapshot.child('entree').exists() );

    this.menuRef.on('value', (snapshot) => {

      this.setState({
        menu: snapshot.val()
      });
    });
  }; //END OF COMPONENT DID MOUNT

  handleAddItem(key) {
    const specific = this.props.itemName;
    // console.log(specific);
  }
  // handleAddItem(key) {
  //   const user = this.props.user
  //   database.ref(`/menus/desserts`)
  //   .child(key)
  //   .child('quantity')
  //   .child(user.uid)
  //   .set(user.displayName)
  // }
  // handleRemoveItem(key) {
  //   const user = this.props.user
  //   database.ref(`/menus/desserts`)
  //   .child(key)
  //   .child('quantity')
  //   .child(user.uid)
  //   .remove(user.displayName)
  // }

  handleChange( e ) {
    e.preventDefault();
    const newMenu = e.target.value;
    this.setState({ newMenu });
  } //END OF HANDLE CHANGE

  // selectMenu( e ) {
  //   e.preventDefault();
  //   this.menuRef = database.ref(`/menus`);
  //   let node = 'desserts'
  //   console.log(this.menuRef);
  // }

  handleSubmit( e ) {
    e.preventDefault();
    // ` string interpolation here to select which node we want to reference and change`
    //ALSO BRING CONLOG FROM ABOVE DOWN AND USE FOR VALIDATION
    // this.menuRef.child('/sides')
    let node = 'desserts';
    //which node to add or remove from
    this.menuRef.child(`/${node}`).push(this.state.newMenu)
    this.setState({ newMenu: '' });
  } //END OF HANDLE SUBMIT

  render() {
    const { currentUser, menuItems, menu } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Skip the Line</h2>
        </div>
        <code>{JSON.stringify(this.state.menuItems, null, 2)}</code>

          <br />  <br />
          {/* //ternary with JUST ONE option */}
          { !currentUser && <SignIn />}
          { currentUser &&
        <div><CurrentUser user={currentUser} />
          <br />  <br />

          <code>Map over these elements </code>
          <br /> <br />

          {
            map(menuItems, (item, key) =>  {
            return (
              <MenuDiv
                key={key}
                itemName={key} />
              ) //end return
            })
          }

        </div> }
        <br /><br />

        <code>Map over INTERNALS </code>
        <br /> <br />

        {
          map(menuItems, (item, key) =>  {
            // console.log(menuItems);
            return (
              <MenuItemDiv
                key={key}
                itemName={item}
                // user={currentUser}
                // handleAddItem={() => this.handleAddItem}
                // handleRemoveItem={() => this.handleRemoveItem}
                />
              )//end return
          } )
        }

        <button
          onClick={this.selectMenu}>
           Click for Desserts</button>

          {/* FORM FOR ADDING MENU ITEM */}
        <form onSubmit={this.handleSubmit} >
          <input
            placeholder="Enter name of menu item to add"
            className='App-form'
            type='text'
            value={this.state.newMenu}
            onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  };
}; //END OF APP COMPONENT



export default App;


/* In react the pattern is to get the information at the top of 'state' and pass it down as needed*/
