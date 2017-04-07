import React, { Component } from 'react'
import Wrapper from './Wrapper';
import '../styles/MenuDiv.css';



class MenuItemDiv extends Component {
    // constructor(...args) {
    //     super(...args);
    // }
    render() {
        const { itemName } = this.props;
        return (
          <div className="flex-container-1">
          <div className="flex-container-2 item-1-width flex-item-large">
                <h2 className="flex-item-small">{itemName}</h2>
          </div>
          <Wrapper />
        </div>

    ) // END OF RETURN
  }
} //END OF MenuItemDiv COMPONENT

export default MenuItemDiv;
