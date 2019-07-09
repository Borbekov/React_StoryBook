import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signOut } from "../../actions/authActions";

const SignedInLink = props => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/create">New Story</NavLink>
      </li>
      <li>
        <a onClick={() => props.signOut()}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating grey">
          BB
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
