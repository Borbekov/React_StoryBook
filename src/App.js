import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Board from "./components/board/Board";
import StoryDetails from "./components/story/StoryDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateStory from "./components/story/CreateStory";

const App = () => {
  if (window.innerWidth < 995 && window.innerHeight < 591) {
    return (
      <div className="mobile-msg">
        <div
          className="container center red-text"
          style={{ marginTop: "15px" }}
        >
          This web app is not fully adaptive. Please, open with laptop, tablet
          (landscape mode) or PC.
        </div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Board} />
          <Route path="/story/:id" component={StoryDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateStory} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
