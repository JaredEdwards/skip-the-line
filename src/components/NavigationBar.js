import React, { Component } from 'react';
import '../styles/NavigationBar.css'
import {
  NavbarHeader,
  Navbar,
  NavItem,
  MenuItem,
  Collapse,
  Nav,
  NavDropdown,
  PanelGroup,
  Accordion,
  Panel,
  Glyphicon
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';


import Home from './Home';
import MenuDiv from './MenuDiv';
// import MenuItems from './MenuItems';
import Summary from './Summary';


//THIS IS LINKS


class NavigationBar extends Component {
  render() {
    return (
    <Navbar collapseOnSelect className="nav-bar-all nav-perim">
      <Navbar.Header>
        <Navbar.Brand className="brand">
          <a href="#">Skip the Line</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="nav-items">
          <NavItem><NavLink exact to='/'>Home</NavLink></NavItem>
          <NavItem><NavLink to='/menu'>Menu</NavLink></NavItem>
        </Nav>
        <Nav pullRight className="nav-items">
          <NavItem><NavLink to='/summary'><span className="glyphicon glyphicon-shopping-cart"></span>{'  '}Checkout [numItems]</NavLink></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavigationBar;
