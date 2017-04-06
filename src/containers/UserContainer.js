import React, {Component} from 'react'
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
import MainContainer from '../containers/MainContainer';
// import UserContainer from './containers/UserContainer';
import ContentContainer from '../containers/ContentContainer';

class UserContainer extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-4 left-box font">
                {this.props.children}
            </div>
        )
    }
}
export default UserContainer;
