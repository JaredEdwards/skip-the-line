import React, { Component } from 'react'
import {auth, database} from '../firebase';
import CurrentUser from '../components/CurrentUser';
import SignIn from '../components/SignIn';
import '../styles/App.css';
import map from 'lodash/map';
import MenuItemDiv from '../components/MenuItemDiv';
import MainContainer from '../containers/MainContainer';
import UserContainer from '../containers/UserContainer';

class Drinks extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentUser: null,
          menu: ''
      }
      // let menuToDisplay = this.state.menuToDisplay;

      this.menuRef = database.ref(`/menus/drinks`);
  }
  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
        this.setState({currentUser})
        this.menuRef.once('value', (snapshot) => {
          console.log(snapshot);
            this.setState({menu: snapshot.val()});
        });
    }); //END OF AUTSTATECHANGED

      //Get a snapshot of the current state of the database
      this.menuRef.on('value', (snapshot) => {
          this.setState({menu: snapshot.val()});
      });
  }; //END OF COMPONENT DID MOUNT
  render() {

    // TODO:  menuToDisplay,
    const { menu, currentUser } = this.state;
    return (
      <div className="App col-md-12 container-fluid">
        <UserContainer>
            {currentUser ? <CurrentUser user={currentUser}/> : <SignIn/>}
        </UserContainer>
        <MainContainer>
          {
            map(menu, (item, key) =>  {
            return (
              <MenuItemDiv
                key={key}
                itemName={item} />
              ) //end return
            })
          }
        </MainContainer>
      </div>
      )

  }
}

export default Drinks;
