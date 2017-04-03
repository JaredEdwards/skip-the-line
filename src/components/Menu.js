import React, { Component } from 'react'
import { auth, database } from '../firebase';
import map from 'lodash/map';
import '../styles/Menu.css';

class MenuDiv extends Component {
  constructor(props) {
    super(props);
  }

  seeMenuItems( e ) {
    console.log('clicked');
  }
  render() {
    const { itemName, seeMenuItems } = this.props;
    // console.log(this.props);
    return (
      <div className="menuItem">
        {itemName}
        <br />
        <button
          onClick={this.seeMenuItems}
          >See Category Items</button>

      </div>
    )
  }
} //END OF MENUDIV COMPONENT

export default MenuDiv;
