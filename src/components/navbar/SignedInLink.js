import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signOut } from "../../actions/authActions";

const SignedInLink = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Story</NavLink>
      </li>
      <li>
        <a onClick={() => props.signOut()}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue-grey z-depth-0">
          <div className="white-text">{props.initials}</div>
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signOut
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLink);
