import React from "react";
import { firebaseConnect } from "react-redux-firebase";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const UpdateProfile = ({ firebase: { update } }) => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const updateProfile = () => {
    update(`users/${uid}`, { profileImage: "test" });
  };
  return (
    <div className="">
      <Button onClick={updateProfile} />
    </div>
  );
};

export default firebaseConnect(UpdateProfile);
