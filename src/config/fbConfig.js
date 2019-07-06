import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDwcegbBc-O_ZsABqhoJG6iT13K2_z6dQM",
  authDomain: "storiesbook-c05ca.firebaseapp.com",
  databaseURL: "https://storiesbook-c05ca.firebaseio.com",
  projectId: "storiesbook-c05ca",
  storageBucket: "",
  messagingSenderId: "365829858495"
  //appId: "1:365829858495:web:7185582cd4a43d63"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
