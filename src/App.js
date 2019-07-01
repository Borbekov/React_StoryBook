import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Board from "./components/board/Board";
import StoryDetails from "./components/story/StoryDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Board} />
          <Route path="/project/:id" component={StoryDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
