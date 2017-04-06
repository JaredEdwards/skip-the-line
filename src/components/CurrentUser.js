import React, { Component,PropTypes } from 'react';
import { auth } from '../firebase';
import '../styles/CurrentUser.css';

const CurrentUser = ({ user }) => {
// class CurrentUser extends Component {

  // componentDidMount(){
  //   console.log("CURRENT USER MOUNTED");
  // }
  // render(){
  //   const { user } = this.props.user;
  //   console.log(`CURRENT USERCONT `, this.props);
  return (
    <div className="CurrentUser container-fluid">
      <img
        className="CurrentUser--photo img-responsive"
        src={ user.photoURL }
        alt={ user.displayName }
        />
        <div className="CurrentUser--identification">
          <h2> { user.displayName } </h2>
          <h3> { user.email } </h3>
          <button
            onClick={() =>auth.signOut()}>
            Sign Out
          </button>

        </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
