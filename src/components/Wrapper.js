import React, { Component } from 'react';
import '../styles/MenuDiv.css';
import Quantity from './Quantity';

class Wrapper extends Component {
  constructor( props ) {
    super();
    this.state ={
      counter:0
    };
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }

  incrementQuantity( e ) {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrementQuantity( e ) {
    if(this.state.counter <= 0) {
      return this.state.counter
    }else {
      this.setState({counter: this.state.counter - 1})
    }
  }
  render(){
    return (
      <div className="flex-container-2 other-items-width flex-item-large">
      <div className="flex-item-small">
        <button
          className="flex-item-small"
          onClick={this.incrementQuantity}>+</button>
      </div>
      <div className="flex-item-small">
        <button
          className="flex-item-small"
          onClick={this.decrementQuantity}>-</button>
      </div>
      { (this.state.counter >= 0) &&
        <div id='a' className="flex-item-small">
          <Quantity counter={this.state.counter} />
        </div>
      }
    </div>
    )
  }

}

export default Wrapper;
