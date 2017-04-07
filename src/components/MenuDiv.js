import React, { Component } from 'react';
import { database } from '../firebase';
import '../styles/MenuDiv.css';

class MenuDiv extends Component {
  constructor (props) {
    super(props);
    this.state ={
      name: this.props.categoryName,
      menu: '',
      menuToDisplay: '',
      menuShowing: true
    }
    let menuToDisplay = this.state.menuToDisplay;
    this.menuRef = database.ref(`/${menuToDisplay}`);
  }
  componentDidMount(){
    this.menuRef.once('value', (snapshot) => {
      this.setState({menu: snapshot.val()});
    });
  }
  render(){
    const { categoryName, menu } = this.props;
    return (
      <div className='flex-container-1'>
        <div
          className="flex-container-2 item-1-width flex-item-large">
          <div className="flex-item-small">
            <button
              onClick={this.getMenu}
              className="menu-button"
              >{categoryName}</button></div>
        </div>
      </div>
    )
  }
}


//RENDER THE SPECIFC MENU HERE INSIDE THE MENU CONTAINER???

export default MenuDiv;
