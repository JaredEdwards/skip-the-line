import React, { Component } from 'react';
import '../styles/MenuDiv.css';
import Wrapper from './Wrapper';
// import { database } from '../firebase';
// import map from 'lodash/map';
// import Collapsible from 'react-collapsible'
// import {
  // NavbarHeader,
  // Navbar,
  // NavItem,
  // MenuItem,
  // Nav,
  // NavDropdown,
  // PanelGroup,
  // Accordion,
  // Panel
// } from 'react-bootstrap';

class MenuDiv extends Component {
  render(){
    const { itemName } = this.props;
    //^^ This may need to be inside wrapper
    console.log(itemName);
    return (
      <div className='flex-container-1'>
        <div
          className="flex-container-2 item-1-width flex-item-large">
          <div className="flex-item-small">{itemName}</div>
        </div>
        
    </div>
    )
  }
}

export default MenuDiv;
