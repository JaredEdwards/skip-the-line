import React, {Component} from 'react';
import {auth, database} from './firebase';
import CurrentUser from './components/CurrentUser';
import SignIn from './components/SignIn';
import './styles/App.css';
import map from 'lodash/map';
import MenuDiv from './components/MenuDiv';
import Home from './components/Home';
import Wrapper from './components/Wrapper';
// import MenuItemDiv from './components/MenuItemDiv';
// import AddToMenu from './components/AddToMenu';
import Routes from './config/Routes';
import MainContainer from './containers/MainContainer';
import UserContainer from './containers/UserContainer';
import ContentContainer from './containers/ContentContainer';
// import createFragment from 'react-addons-create-fragment'; // ES6

// import Navigation from './Navigation'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentUser: null,
            menu: '',
            menuToDisplay: 'menus'
        };
        let menuToDisplay = this.state.menuToDisplay;
        this.menuRef = database.ref(`/menus`);
    }; // END OF CONSTRUCTOR

    componentDidMount() {
      console.log("component did mount");
      auth.onAuthStateChanged((currentUser) => {
          this.setState({currentUser})
          this.menuRef.once('value', (snapshot) => {
              this.setState({menu: snapshot.val()});
              // console.log(`MenuItems: `, this.state.menu );
          });
      }); //END OF AUTSTATECHANGED



        //Get a snapshot of the current state of the database
        this.menuRef.once('value', (snapshot) => {
            this.setState({menu: snapshot.val()});
        });
    }; //END OF COMPONENT DID MOUNT
    render() {
        const {menu, currentUser} = this.state;
        return (
            <div className="container-fluid">
                <div className="jumbotron font App">
                    <h1>Skip the Line</h1>
                </div>
                <Routes user={currentUser} menu={menu} />
            </div>
        ); //END OF RETURN
    }; // END OF RENDER FUNCTION
}; //END OF APP COMPONENT



export default App;
