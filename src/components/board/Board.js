import React, { Component } from "react";
import Notification from "./Notification";
import StoriesList from "../story/StoriesList";

class Board extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <StoriesList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
