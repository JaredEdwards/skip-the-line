import React, { Component } from 'react'
import { auth, database } from '../firebase';
import map from 'lodash/map';
import '../styles/MenuDiv.css';
import Collapsible from 'react-collapsible'
import {NavbarHeader,
  Navbar,
  NavItem,
  MenuItem,
  Nav,
  NavDropdown,
  PanelGroup,
  Accordion,
  Panel
} from 'react-bootstrap';

class MenuDiv extends Component {
  constructor(props) {
    super(props);
    this.state ={
      qtyOrdered: 0,
      currentEvent: ''
    };
    this.update = this.update.bind(this)
  };

  update( e ){
    this.setState({currentEvent: e.type})
  }

  seeMenuItems( e ) {
    console.log('clicked');
  }
  render() {
    console.log(this.state);
    const { itemName, seeMenuItems } = this.props;
    const panelNumber = 0;
    // console.log(this.props);
    return (
      <div className="menuItem list-group-item">
        <div>
        {itemName}
        <br />
        <button
          onClick={this.seeMenuItems}
          onFocus={this.update}
          >See Category Items</button>
        </div>



      </div>
    )
  }
} //END OF MENUDIV COMPONENT

export default MenuDiv;
