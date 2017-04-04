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
        this.state = {
            open: true
        };
    }
    clicked(e) {
        console.log("clicked");
    }

    render() {
        const Button = () => <button>me</button>
        const itemArray = createFragment(this.props.itemName);
        return (
          <div>

            <div className="menuItem">
            {map(itemArray, (key, item) => {
                return (
                    <div key={key}>
                        {key}
                        <button onClick={this.clicked}>+</button>
                        <button onClick={this.clicked}>-</button>
                    </div>
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
