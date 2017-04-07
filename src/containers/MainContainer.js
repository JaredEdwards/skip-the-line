import React, { Component } from 'react'
import { database } from '../firebase';
import '../styles/App.css';
import '../styles/MenuDiv.css';

class MainContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      menu: '',
    }
    this.menuRef = database.ref(`/menus`);
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

  return (
      <div className="col-md-9 col-sm-8 right-box">
        {this.props.children}
      </div>
    )
  }
  }

export default MainContainer;
