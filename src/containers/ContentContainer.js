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
            menuToDisplay: 'menus'
        }
        this.getMenuItems = this.getMenuItems.bind(this);
        let menuToDisplay = this.state.menuToDisplay;
        this.menuRef = database.ref(`/${menuToDisplay}/desserts`);
    }
    componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
            this.setState({currentUser})
            this.menuRef.on('value', (snapshot) => {
                this.setState({menu: snapshot.val()});
                // console.log(`MenuItems: `, this.state.menu );
            });
        }); //END OF AUTSTATECHANGED

    } //END OF COMPONENT DID MOUNT
    getMenuItems() {
      console.log(`${name} actually worked`);
      // this.setState({hidden: ! this.state.isHidden})
    }

    render() {
        const {currentUser, menu} = this.state;
        return (
            <div>
                <UserContainer>
                    {currentUser
                        ? <CurrentUser user={currentUser}/>
                        : <SignIn/>}
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

export default ContentContainer;
