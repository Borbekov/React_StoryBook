import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";

const Navbar = props => {
  const links = props.auth.uid ? <SignedInLink /> : <SignedOutLink />;
  return (
    <nav>
      <div className="nav-wrapper red lighten-1">
        <div className="container">
          <Link to="/" className="brand-logo">
            StoriesBook
          </Link>
          {links}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
