import React from "react";
import moment from "moment";

const StorySummary = ({ story }) => {
  return (
    <div className="card blue-grey darken-1" style={{ marginBottom: "20px" }}>
      <div className="card-content white-text">
        <span className="card-title">{story.title}</span>
        <p>
          Posted by {story.firstName} {story.secondName}
        </p>
        <p className="grey-text">
          {moment(story.createdAt.toDate()).calendar()}
        </p>
      </div>
      <a className="btn-floating btn-small halfway-fab red lighten-1">
        <i class="material-icons">zoom_out_map</i>
      </a>
    </div>
  );
};

export default StorySummary;
