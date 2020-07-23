import React from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import ImageUploader from "../../ImageUploader/ImageUploder";

const UpdateProfile = () => {
  const firestore = useFirestore();
  const {
    auth: { uid },
    profile,
  } = useSelector((state) => state.firebase);

  //   called after getting the url from cloudinary
  const updateProfile = (url) => {
    let profileToUpdate = profile;
    profileToUpdate.avatarUrl = url;

    firestore
      .collection(`users`)
      .doc(uid)
      .update(profileToUpdate)
      .then((docRef) => {
        console.log(docRef);
      });
  };

  return (
    <div className="">
      <ImageUploader
        handleClick={updateProfile}
        styleClass={"none"}
        btnText={"Update Profile Photo"}
      />
    </div>
  );
};

export default UpdateProfile;