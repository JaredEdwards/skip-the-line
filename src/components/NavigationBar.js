import React, { Component } from 'react';
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

class NavigationBar extends Component {
  render() {
    return (
      <div>
      <Navbar collapseOnSelect className="navbar-top" >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Skip the Line!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}

export default NavigationBar;