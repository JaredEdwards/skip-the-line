import React from 'react'
import '../styles/MenuDiv.css';

function MenuContainer (props) {
  return (
      <div className="col-md-9 col-sm-8 right-box">
        {props.children}
      </div>
    )
  }

export default MenuContainer;
