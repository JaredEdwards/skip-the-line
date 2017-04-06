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

import NavigationBar from '../components/NavigationBar'
import Home from '../components/Home';
import MenuDiv from '../components/MenuDiv';
// import MenuItem from '../components/MenuItems';
import Summary from '../components/Summary';
// import Controller from '../components/Controller';


// THIS IS ROUTER ROUTE GETS path=""

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/menu' component={MenuDiv} />
            <Route path='/summary' component={Summary} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes;
