import React from "react";
import StorySummary from "./StorySummary";

const StoriesList = ({ stories }) => {
  return (
    <div className="scroll-div">
      {stories &&
        stories.map(story => <StorySummary story={story} key={story.id} />)}
    </div>
  );
};

export default StoriesList;
