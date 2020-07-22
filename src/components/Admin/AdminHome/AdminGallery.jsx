import React from "react";
import { useSelector } from "react-redux";

import { useFirebaseConnect } from "react-redux-firebase";

import "../../../assets/stylesheets/adminGallery.css";

const AdminGallery = (props) => {
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
          <a href={url} target="_blank" key={i} rel="noopener noreferrer">
            <img src={url} alt={"insert alt"} />
          </a>
        );
      })
    );
  };

  return <div className="user-image-gallery">{imageElements()}</div>;
};

export default AdminGallery;
