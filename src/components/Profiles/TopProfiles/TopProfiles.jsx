import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import ProfileCard from "../ProfileCard/ProfileCard";

const TopProfiles = () => {
  const users = useSelector((state) => state.firestore.data.users);
  useFirestoreConnect({
    collection: "users",
    storeAs: "users",
  });

  //   Get the top requested profiles
  // TODO: add sorting algorithm to get most matched with
  const topProfiles = () => {
    return (
      users &&
      Object.keys(users).map((userId, i) => {
        let { displayName, email, avatarUrl } = users[userId];

        return (
          <ProfileCard
            displayName={displayName}
            email={email}
            src={avatarUrl}
            alt={displayName}
            styleClass={"profile-card top-profiles-card"}
          />
        );
      })
    );
  };

  return (
    <div className="" style={{ textAlign: "center" }}>
      {topProfiles()}
    </div>
  );
};

export default TopProfiles;
