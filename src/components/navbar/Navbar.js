import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper red lighten-1">
        <div className="container">
          <Link to="/" className="brand-logo">
            StoriesBook
          </Link>
          <SignedInLink />
          <SignedOutLink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
