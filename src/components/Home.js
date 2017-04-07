import React, { Component } from 'react'
import {auth, database} from '../firebase';
import CurrentUser from '../components/CurrentUser';
import SignIn from '../components/SignIn';
import '../styles/App.css';
import map from 'lodash/map';
import MenuDiv from '../components/MenuDiv';
import Wrapper from '../components/Wrapper';
// import MenuItemDisplay from './components/MenuItemDisplay';
// import AddToMenu from './components/AddToMenu';
import Routes from '../config/Routes';
import MainContainer from '../containers/MainContainer';
import UserContainer from '../containers/UserContainer';
import ContentContainer from '../containers/ContentContainer';

class Home extends Component {
  render() {
    return (
      <ContentContainer className="App col-md-12 container-fluid" />
    )
  }
}

export default Home;
