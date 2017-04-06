import React, {Component} from 'react';
import {auth, database} from './firebase';
import CurrentUser from './components/CurrentUser';
import SignIn from './components/SignIn';
import './styles/App.css';
import map from 'lodash/map';
import MenuDiv from './components/MenuDiv';
import Home from './components/Home';
import Wrapper from './components/Wrapper';
// import MenuItemDisplay from './components/MenuItemDisplay';
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
            // currentUser: null,
            menu: '',
            menuToDisplay: 'menus'
        };

        let menuToDisplay = this.state.menuToDisplay;
        this.getMenuItems = this.getMenuItems.bind(this);
        this.menuRef = database.ref(`/${menuToDisplay}`);
    }; // END OF CONSTRUCTOR

    componentDidMount() {
        // auth.onAuthStateChanged((currentUser) => {
        //     this.setState({currentUser})
        //     this.menuRef.on('value', (snapshot) => {
        //         this.setState({menu: snapshot.val()});
        //         // console.log(`MenuItems: `, this.state.menu );
        //     });
        // }); //END OF AUTSTATECHANGED

        //Get a snapshot of the current state of the database
        this.menuRef.on('value', (snapshot) => {
            this.setState({menu: snapshot.val()});
        });

    }; //END OF COMPONENT DID MOUNT
    getMenuItems() {
      console.log(`${name} actually worked`);
      // this.setState({hidden: ! this.state.isHidden})
    }

    render() {
        // currentUser,
        const { menu} = this.state;
        return (
            <div className="container-fluid">
              <div className="jumbotron font App">
                <h1>Skip the Line</h1>
              </div>

            <Routes />



            {/* <div className="App col-md-12 container-fluid"> */}
            {/* <ContentContainer> */}

           {/* <UserContainer /> */}



            {/* <div className="col-md-9 col-sm-8 right-box"> */}
            {/* { currentUser ? */}
              {/* <div>
                  <MainContainer menu={menu}>
                  <code>Map over these elements </code>

                    {
                      map(menu, (item, key) =>  {
                      return (
                        <MenuDiv
                          ref={key}
                          key={key}
                          onClick={this.getMenuItems}
                          categoryName={key} />
                        ) //end return
                      })
                    }

                </MainContainer>
            </div> */}

          {/* } */}

        {/* </ContentContainer> */}
        </div> // END OF APP class

        ); //END OF RETURN

    }; // END OF RENDER FUNCTION

}; //END OF APP COMPONENT


const Welcome = () => {
    return (
      <div>
        <h1> # Welcome!</h1>
        <h3> # Filler Message goes here</h3>
      </div>
    )
}

export default App;
