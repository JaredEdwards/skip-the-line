import React, { Component } from 'react';
import '../styles/NavigationBar.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavigationBar from '../components/NavigationBar'
import Home from '../components/Home';
import Entrees from '../components/Entrees'
import Sides from '../components/Sides';
import Desserts from '../components/Desserts'
import Drinks from '../components/Drinks'
import Summary from '../components/Summary';
import AddToMenu from '../components/AddToMenu'

class Routes extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/entrees' component={Entrees} />
            <Route path='/sides' component={Sides} />
            <Route path='/desserts' component={Desserts} />
            <Route path='/drinks' component={Drinks} />
            <Route path='/summary' component={Summary} />
            <Route path='/add' component={AddToMenu} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes;
