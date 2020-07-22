import React from "react";
import { useSelector } from "react-redux";

import Cloudinary from "./Cloudinary";
import { useFirebaseConnect } from "react-redux-firebase";

const FirebaseImageUpload = (props) => {
  const { uid } = useSelector((state) => state.firebase.auth);

  // get user images store to redux
  useFirebaseConnect(`users/${uid}/images`);

  const images = useSelector(
    (state) =>
      state.firebase.data.users && state.firebase.data.users[uid].images
  );

  const imageElements = () => {
    return (
      images &&
      Object.keys(images).map((key, i) => {
        let url = images[key];
        return (
          <img
            key={i}
            src={url}
            alt={"insert alt"}
            height="40px"
            width="40px"
          />
        );
      })
    );
  };

  return (
    <div>
      <div className="">{imageElements()}</div>
      <Cloudinary />
    </div>
  );
};

export default FirebaseImageUpload;
