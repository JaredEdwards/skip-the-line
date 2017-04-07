import React, { Component } from 'react'
import { auth } from '../firebase';
import CurrentUser from '../components/CurrentUser';
import SignIn from '../components/SignIn';
import '../styles/App.css';
import MainContainer from '../containers/MainContainer';
import UserContainer from '../containers/UserContainer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
        }
    }
    componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
        this.setState({currentUser})
    }); //END OF AUTSTATECHANGED

  }; //END OF COMPONENT DID MOUNT
  render() {
    const {currentUser} =this.state;
    return (
      <div className="App col-md-12 container-fluid">
        <UserContainer>
          {currentUser ? <CurrentUser user={currentUser}/> : <SignIn/>}
        </UserContainer>
        <MainContainer>
          <Welcome />
        </MainContainer>
    </div>
    )
  }
}

const Welcome = () => {
    return (
        <div>
            <h1>
                # Welcome!</h1>
            <h3>
                # Filler Message goes here</h3>
        </div>
    )
}


export default Home;
