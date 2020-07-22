﻿import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import unregister from "./registerServiceWorker";
import ErrorBoundary from "./components/ErrorBoundary";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./config/firebase";
import firebase from "firebase/app";

// import cloudinaryConfig from "./config/cloudinary";
// import cloudinary from "cloudinary";

// cloudinary image hosting
// console.log(process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
// cloudinary.config({
//   cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.REACT_APP_CLOUDINARY_KEY,
//   api_secret: process.env.REACT_APP_CLOUDINARY_SECRET,
// });

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  presence: "presence", // where list of online users is stored in database
  sessions: "sessions",
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

/**
 * Be aware that the website will only update to the latest version on the 2nd page visit if it as already cached
 * Learn more about service workers in React: https://create-react-app.dev/docs/making-a-progressive-web-app
 */
unregister();
