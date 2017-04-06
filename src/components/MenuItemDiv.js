import React, {Component} from 'react'
import {database} from '../firebase';
import Wrapper from './Wrapper';
import map from 'lodash/map';
import '../styles/MenuItemDisplay.css'
import '../styles/MenuDiv.css';
import createFragment from 'react-addons-create-fragment'; // ES6
// import {NavbarHeader,
//   Navbar,
//   NavItem,
//   MenuItem,
//   Nav,
//   NavDropdown,
//   PanelGroup,
//   Accordion,
//   Panel
// } from 'react-bootstrap';
// import Collapsible from 'react-collapsible';


class MenuItemDiv extends Component {
    constructor(...args) {
        super(...args);
    }
    render() {

        console.log(this.props);
        // const itemArray = createFragment(this.props.itemName);
        const itemArray = this.props.itemName;
        return (
          <div className="flex-container-2 item-1-width">
            <div className="menuItem">
            {map(itemArray, (key, item) => {
                return (
                        <h1>{key}</h1>

                ) //end of map return
              })
            }
        </div>
          <Wrapper />
      </div>

    ) // END OF RETURN
  }
} //END OF MenuItemDiv COMPONENT

export default MenuItemDiv;
