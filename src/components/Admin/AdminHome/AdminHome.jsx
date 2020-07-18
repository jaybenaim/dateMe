import React from "react";
import { useSelector } from "react-redux";
import "../../../assets/stylesheets/adminPage.css";
import ImageUploader from "./ImageUploader/ImageUploader";

const AdminHome = () => {
  const { displayName, avatarUrl, email } = useSelector(
    (state) => state.firebase.profile
  );

  return (
    <div className="admin-page">
      <section className="left-panel">
        <img src={avatarUrl} alt={displayName} />
        <div className="display-name">{displayName}</div>
        <div className="email">{email}</div>
      </section>
      <section className="main-content">
        <ImageUploader />
      </section>
    </div>
  );
};

export default AdminHome;
