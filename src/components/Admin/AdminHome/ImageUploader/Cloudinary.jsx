import React from "react";

import { cloudinaryConfig } from "../../../../config/cloudinary";

import { useSelector } from "react-redux";
import { firebase } from "../../../../config/firebase";

const Cloudinary = () => {
  const { uid } = useSelector((state) => state.firebase.auth);

  const databaseRef = firebase.database().ref();

  const userImagesRef = databaseRef.child("users").child(uid).child("images");

  const addImage = (url) => {
    return userImagesRef.push(url, (res) => console.log(res));
  };

  const uploadWidget = () => {
    // eslint-disable-next-line
    cloudinary.openUploadWidget(
      {
        cloud_name: cloudinaryConfig.cloudName,
        upload_preset: cloudinaryConfig.uploadPreset,
        tags: ["dating"],
      },
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          addImage(result[0].secure_url);
        }
      }
    );
  };
  return (
    <div className="main">
      <div className="upload">
        <button onClick={uploadWidget.bind(this)} className="upload-button">
          Add Image
        </button>
      </div>
    </div>
  );
};

export default Cloudinary;
