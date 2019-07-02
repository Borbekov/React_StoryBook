import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLink = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLink;
