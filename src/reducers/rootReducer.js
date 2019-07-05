import authReducer from "./authReducer";
import storyReducer from "./storyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  story: storyReducer
});

export default rootReducer;
