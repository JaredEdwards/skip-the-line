import React, {Component} from 'react'
import {auth, database} from '../firebase';
import CurrentUser from '../components/CurrentUser';
import SignIn from '../components/SignIn';
import '../styles/App.css';
import map from 'lodash/map';
import MenuDiv from '../components/MenuDiv';
import Wrapper from '../components/Wrapper';
import MenuItemDiv from '../components/MenuItemDiv';
// import AddToMenu from './components/AddToMenu';
import Routes from '../config/Routes';
import MainContainer from './MainContainer';
import UserContainer from './UserContainer';
// import ContentContainer from '../containers/ContentContainer';

class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            menu: '',
            menuToDisplay: '',
            menuShowing: true
        }
        this.getMenu =this.getMenu.bind(this);
        let menuToDisplay = this.state.menuToDisplay;

        ///THIS IS THE ONLY CALL TO THE DB
        this.menuRef = database.ref(`/menus/`);
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

    getMenu(e) {
      console.log(`${this.state.name} actually MenuDiv worked`);
      this.setState({
        menuToDisplay: `menus/${this.props.categoryName}`
      })
      console.log(`STATE`, this.state);
      console.log(`PROPS`, this.props);
      this.menuRef.on('value', (snapshot) => {
        this.setState({menu: snapshot.val()});
      });
    }
    render() {
        const {currentUser, menu} = this.state;

        return (
            <div>

                <MainContainer menu={menu}>

                </MainContainer>
            </div>
        )
    }

}


export default ContentContainer;
