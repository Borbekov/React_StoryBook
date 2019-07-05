import React from "react";

const StoryDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title - {id}</span>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          </p>
        </div>
        <div className="card-action white-text">
          <div>Posted by Borbekov Bekzhan</div>
          <div>20.10.1997</div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
