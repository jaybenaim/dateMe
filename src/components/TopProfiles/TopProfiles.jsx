import React from "react";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const TopProfiles = () => {
  //   const firestore = useFirestore();
  const users = useSelector((state) => state.firestore.data.users);
  useFirestoreConnect({
    collection: "users",
    storeAs: "users",
  });

  //   Get the top requested profiles
  // TODO: add sorting algorithm to get most matched with
  const topProfiles = () => {
    let topProfileElements = [];
    for (let user in users) {
      topProfileElements.push(users[user]);
    }
    return topProfileElements.map((profile, i) => {
      let { displayName, email, avatarUrl } = profile;

      return (
        <div key={i}>
          <img
            src={avatarUrl}
            alt={displayName}
            height={"100px"}
            width={"100px"}
          />
          {displayName} - {email}
        </div>
      );
    });
  };

  return (
    <div className="" style={{ textAlign: "center" }}>
      Top Profiles
      <Button>Add Profile</Button>
      {topProfiles()}
    </div>
  );
};

export default TopProfiles;

// const addProfile = (profile) => {
//     if (!profile) {
//         profile = { name: "john" };
//     }
//     firestore
//         .collection("profiles")
//         .add(profile)
//         .then((docRef) => {
//             docRef.update({
//                 profileId: docRef.id,
//             });
//         });
// };
