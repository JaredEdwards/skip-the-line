import React, { Component } from 'react'
import { database } from '../firebase';
import '../styles/MenuItemDiv.css'
import '../styles/AddToMenu.css'


class AddToMenu extends Component {
  constructor( props ) {
    super( props );
    this.state ={
      newMenu: '',
      menuToDisplay: 'menus',
      node: 'desserts'
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
  componentWillUnmount(){
    this.menuRef.off()
  }

  handleChange( e ) {
    e.preventDefault();
    const newMenu = e.target.value;
    this.setState({ newMenu });
  } //END OF HANDLE CHANGE

  handleSubmit( e ) {
    e.preventDefault();
    let node = this.state.node;
    //which node to add or remove from
    this.menuRef.child(`/${node}`).push(this.state.newMenu)
    this.setState({ newMenu: '' });
  } //END OF HANDLE SUBMIT

  render() {
    const { node } =this.state;
    return (
      <div className="container-fluid border box">
        <div className='padded'>
          <h3>Select the menu to add to
            <br /><span className="node">{node.toUpperCase()}</span>
          </h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter name of menu item to add"
            className='App-form'
            type='text'
            value={this.state.newMenu}
            onChange={this.handleChange} />
            <br />
          <input type='submit' className='padded' />
        </form>
        <br /><br />
        <button
          className="padded "
          onClick={() => {this.setState({node: 'entree'})}}
          >Entree</button>
        <button
          className="padded "
          onClick={() => {this.setState({node: 'sides'})}}
          >Sides</button>
        <button
          className="padded "
          onClick={() => {this.setState({node: 'drinks'})}}
          >Drinks</button>
        <button
          className="padded "
          onClick={() => {this.setState({node: 'desserts'})}}
          >Desserts</button>
        </div>
      </div>
    )
  }


}

export default AddToMenu;
