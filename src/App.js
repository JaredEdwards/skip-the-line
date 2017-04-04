import React, {Component} from 'react';
import {auth, database} from './firebase';
import './styles/App.css';
import map from 'lodash/map';
import CurrentUser from './components/CurrentUser';
import SignIn from './components/SignIn';
import MenuDiv from './components/MenuDiv';
import MenuItemDisplay from './components/MenuItemDisplay';
import AddToMenu from './components/AddToMenu';
import NavigationBar from './components/NavigationBar';
import createFragment from 'react-addons-create-fragment'; // ES6



// import Navigation from './Navigation'

class App extends Component {
    constructor(props) {
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
        auth.onAuthStateChanged((currentUser) => {
            this.setState({currentUser})
            this.menuRef.on('value', (snapshot) => {
                // console.log( snapshot.val() );
                this.setState({menuItems: snapshot.val()});
            });
        }); //END OF AUTSTATECHANGED

        //Get a snapshot of the current state of the database
        this.menuRef.on('value', (snapshot) => {
            this.setState({menu: snapshot.val()});
        });

    }; //END OF COMPONENT DID MOUNT

    render() {
        const {currentUser, menuItems, menu} = this.state;
        return (
            <div className="App col-md-12 container-fluid">
            <div className="jumbotron font">
                <h1>Skip the Line</h1>
            </div>
            <NavigationBar />
            <div className="col-md-3 col-sm-4 left-box font">
              <div>
                <h1 className="welcome-line">Welcome!</h1>
                <h3>Sign in to view the menu</h3>
                { currentUser ? <CurrentUser user={currentUser} /> : <SignIn /> }
              </div>
            </div>

            <div className="col-md-9 col-sm-8 right-box">
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

        </div> // END OF APP WRAPPER
        ); //END OF RETURN

    }; // END OF RENDER FUNCTION

}; //END OF APP COMPONENT

export default App;
