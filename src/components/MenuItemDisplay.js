import React, {Component} from 'react'
import {auth, database} from '../firebase';
import map from 'lodash/map';
import '../styles/MenuItemDisplay.css'
import createFragment from 'react-addons-create-fragment'; // ES6

class MenuItemDiv extends Component {
    clicked(e) {
        console.log("clicked");
    }
    render() {
        const itemArray = createFragment(this.props.itemName);
        return (
            <div className="menuItem">
                {
                  map(itemArray, (key, item) => {
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
        ) // END OF RETURN
    }
} //END OF MenuItemDiv COMPONENT

export default MenuItemDiv;
