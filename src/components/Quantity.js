import React, { Component } from 'react'
import '../styles/MenuDiv.css';

class Quantity extends Component {
  render() {
    return <div className="center-text">{this.props.counter}</div>
  }
}

// const Quantity = (props) => <div className="center-text">{props.counter}</div>

export default Quantity;
