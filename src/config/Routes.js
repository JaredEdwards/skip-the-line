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
import Entrees from '../components/Entrees'
import Sides from '../components/Sides';
import Desserts from '../components/Desserts'
import Drinks from '../components/Drinks'
// import MenuItem from '../components/MenuItems';
import Summary from '../components/Summary';
// import Controller from '../components/Controller';



// THIS IS ROUTER ROUTE GETS path=""

class Routes extends Component {
  componentDidMount() {
    console.log("Routes mounted");
  }
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sides' component={Sides} />
            <Route path='/summary' component={Summary} />
            <Route path='/desserts' component={Desserts} />
            <Route path='/drinks' component={Drinks} />
            <Route path='/entrees' component={Entrees} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes;
