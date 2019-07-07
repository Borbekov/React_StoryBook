import authReducer from "./authReducer";
import storyReducer from "./storyReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  story: storyReducer,
  firestore: firestoreReducer
});

export default rootReducer;
