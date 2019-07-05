import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLink = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/create">New Story</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating grey">
          BB
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLink;
