import React from "react";
import StorySummary from "./StorySummary";
import { Link } from "react-router-dom";

const StoriesList = ({ stories }) => {
  return (
    <div className="scroll-div">
      {stories &&
        stories.map(story => (
          <Link to={"/story/" + story.id}>
            <StorySummary story={story} key={story.id} />
          </Link>
        ))}
    </div>
  );
};

export default StoriesList;
