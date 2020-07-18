import React from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import "../../../assets/stylesheets/adminPage.css";

const AdminHome = () => {
  const { displayName, avatarUrl, email } = useSelector(
    (state) => state.firebase.profile
  );
  const firebase = useFirebase();

  return (
    <div className="admin-page">
      <section className="left-panel">
        <img src={avatarUrl} alt={displayName} />
        <div className="display-name">{displayName}</div>
        <div className="email">{email}</div>
      </section>
    </div>
  );
};

export default AdminHome;
