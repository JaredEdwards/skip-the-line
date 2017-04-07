import React, { Component } from 'react';
import '../styles/NavigationBar.css'
import {
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// TODO: Add interpolated string in checkout for number of items

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
          <NavItem><NavLink to='/entrees'>Entrees</NavLink></NavItem>
          <NavItem><NavLink to='/sides'>Sides</NavLink></NavItem>
          <NavItem><NavLink to='/drinks'>Drinks</NavLink></NavItem>
          <NavItem><NavLink to='/desserts'>Desserts</NavLink></NavItem>
          <NavItem><NavLink to='/add'>Add</NavLink></NavItem>
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
