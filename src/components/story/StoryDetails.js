import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const StoryDetails = props => {
  const { story, auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }

  if (story) {
    return (
      <div className="container">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{story.title}</span>
            <p>{story.content}</p>
          </div>
          <div className="card-action white-text">
            <div>
              Posted by {story.firstName} {story.secondName}
            </div>
            <div>{moment(story.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading story...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const stories = state.firestore.data.stories;
  const story = stories ? stories[id] : null;
  return {
    story: story,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "stories" }])
)(StoryDetails);
