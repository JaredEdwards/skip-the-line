import React, {Component} from 'react'
import '../styles/App.css';

class UserContainer extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-4 left-box font">
                {this.props.children}
            </div>
        )
    }
}
export default UserContainer;
