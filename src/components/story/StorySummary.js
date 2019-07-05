import React from "react";

const StorySummary = ({ story }) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{story.title}</span>
        <p>Posted by Borbekov Bekzhan</p>
        <p className="grey-text">20.10.1997</p>
      </div>
    </div>
  );
};

export default StorySummary;
