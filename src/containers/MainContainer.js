import React, { Component } from 'react'
import '../styles/MenuDiv.css';
import {auth, database} from '../firebase';
import CurrentUser from '../components/CurrentUser';
import SignIn from '../components/SignIn';
import '../styles/App.css';
import map from 'lodash/map';
import MenuDiv from '../components/MenuDiv';
import Home from '../components/Home';
import Wrapper from '../components/Wrapper';
// import MenuItemDisplay from './components/MenuItemDisplay';
// import AddToMenu from './components/AddToMenu';
import Routes from '../config/Routes';
// import UserContainer from './containers/UserContainer';
import ContentContainer from '../containers/ContentContainer';

class MainContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      menu: '',
      menuShowing: true
    }
    let menuToDisplay = this.state.menuToDisplay;
    this.menuRef = database.ref(`/menus/desserts`);
    this.getMenu =this.getMenu.bind(this);
  }
  componentDidMount() {
    this.menuRef.once('value', (snapshot) => {
        this.setState({menu: snapshot.val()});
    });

  }
  getMenu(e) {
    console.log(`${this.state.name} actually MenuDiv worked`);
    console.log("PROPS", this.props);
  }
  render(){
    const { menu } = this.state;
  return (
      <div className="col-md-9 col-sm-8 right-box">
        {this.props.children}
      </div>
    )
  }
  }

export default MainContainer;
