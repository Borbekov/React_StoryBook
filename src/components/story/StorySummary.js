import React from "react";
import moment from "moment";

const StorySummary = ({ story }) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{story.title}</span>
        <p>
          Posted by {story.firstName} {story.secondName}
        </p>
        <p className="grey-text">
          {moment(story.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default StorySummary;
