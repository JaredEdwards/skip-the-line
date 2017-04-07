import React, { Component } from 'react'
import {auth, database} from '../firebase';
import CurrentUser from '../components/CurrentUser';
import SignIn from '../components/SignIn';
import '../styles/App.css';
import map from 'lodash/map';
import MenuItemDiv from './MenuItemDiv';
import Wrapper from '../components/Wrapper';
// import MenuItemDisplay from './components/MenuItemDisplay';
// import AddToMenu from './components/AddToMenu';
import Routes from '../config/Routes';
import MainContainer from '../containers/MainContainer';
import UserContainer from '../containers/UserContainer';
import ContentContainer from '../containers/ContentContainer';

class Sides extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentUser: null,
          menu: this.props.menu,
          menuToDisplay: '',
          menuShowing: true
      }
      let menuToDisplay = this.state.menuToDisplay;

      ///THIS IS THE ONLY CALL TO THE DB
      this.menuRef = database.ref(`/menus/sides`);
  }
  componentDidMount() {
      auth.onAuthStateChanged((currentUser) => {
          this.setState({currentUser})
          this.menuRef.once('value', (snapshot) => {
              this.setState({menu: snapshot.val()});
              // console.log(`MenuItems: `, this.state.menu );
          });
      }); //END OF AUTSTATECHANGED
  } //END OF COMPONENT DID MOUNT
  render() {
    const {menu, currentUser} = this.state;
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

export default Sides;
