import React, { Component } from 'react'
import { auth, database } from '../firebase';
import map from 'lodash/map';
import '../styles/MenuDiv.css';

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
  }

  seeMenuItems( e ) {
    console.log('clicked');
  }
  render() {
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
          >See Category Items</button>
        </div>

          <div>
            <Accordion>
              <Panel header={itemName} eventKey={panelNumber +1}>
                {itemName}
              </Panel>
            </Accordion>
          </div>
      </div>
    )
  }
} //END OF MENUDIV COMPONENT

export default MenuDiv;
