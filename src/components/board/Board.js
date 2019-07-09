import React, { Component } from "react";
import Notification from "./Notification";
import StoriesList from "../story/StoriesList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Board extends Component {
  render() {
    const { stories, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <StoriesList stories={stories} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.firestore.ordered.stories,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "stories" }])
)(Board);
