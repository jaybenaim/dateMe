import { combineReducers } from "redux";
import errorReducer from "./errorReducers";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import imageReducers from "./imageReducers";

export default combineReducers({
  errors: errorReducer,
  profileImages: imageReducers,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
