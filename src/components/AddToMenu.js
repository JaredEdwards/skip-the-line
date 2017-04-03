import React, { Component } from 'react'
import { auth, database } from '../firebase';
import map from 'lodash/map';
import '../styles/MenuItemDisplay.css'

class AddToMenu extends Component {
  constructor( props ) {
    super( props );
    this.state ={
      newMenu: '',
      menuToDisplay: 'menus'
    };
    let menuToDisplay = this.state.menuToDisplay;
    this.menuRef = database.ref(`/${menuToDisplay}`);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.menuRef.on('value', (snapshot) => {
      this.setState({
        menu: snapshot.val()
      });
    });
  } //END OF COMPONENT DID MOUNT

  handleChange( e ) {
    e.preventDefault();
    const newMenu = e.target.value;
    this.setState({ newMenu });
  } //END OF HANDLE CHANGE

  // selectMenu( e ) {
  //   e.preventDefault();
  //   this.menuRef = database.ref(`/menus`);
  //   let node = 'desserts'
  //   console.log(this.menuRef);
  // }

  handleSubmit( e ) {
    e.preventDefault();
    // ` string interpolation here to select which node we want to reference and change`
    //ALSO BRING CONLOG FROM ABOVE DOWN AND USE FOR VALIDATION
    // this.menuRef.child('/sides')
    let node = 'drinks';
    //which node to add or remove from
    this.menuRef.child(`/${node}`).push(this.state.newMenu)
    this.setState({ newMenu: '' });
  } //END OF HANDLE SUBMIT

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            placeholder="Enter name of menu item to add"
            className='App-form'
            type='text'
            value={this.state.newMenu}
            onChange={this.handleChange} />
            <input type='submit' />
        </form>
      </div>
    )
  }


}

export default AddToMenu;
