import React from "react";
import { useSelector } from "react-redux";
import AdminGallery from "./AdminGallery";
import ImageUploader from "../../ImageUploader/ImageUploder";
import { firebase } from "../../../config/firebase";
import "../../../assets/stylesheets/adminPage.css";
import UpdateProfile from "../../Profiles/UpdateProfile/UpdateProfille";

const AdminHome = () => {
  const { displayName, avatarUrl, email } = useSelector(
    (state) => state.firebase.profile
  );
  const { uid } = useSelector((state) => state.firebase.auth);

  const databaseRef = firebase.database().ref();

  const userImagesRef = databaseRef.child("users").child(uid).child("images");
  const timestamp = new Date();

  const addImage = (url) => {
    return userImagesRef.push({
      url,
      timestamp: timestamp.toDateString(),
    });
  };

  return (
    <div className="admin-page">
      <section className="left-panel">
        <img src={avatarUrl} alt={displayName} />
        <div className="display-name">{displayName}</div>
        <div className="email">{email}</div>
        <UpdateProfile />
      </section>

      <section className="main-content">
        <AdminGallery />

        <ImageUploader
          handleClick={addImage}
          styleClass={"upload-button"}
          btnText={<i class="fa fa-plus" aria-hidden="true"></i>}
        />
      </section>
    </div>
  );
};

export default AdminHome;
