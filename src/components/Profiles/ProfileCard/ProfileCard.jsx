import React from "react";

import "../../../assets/stylesheets/profileCard.css";

const ProfileCard = ({ src, alt, email, displayName, styleClass }) => {
  return (
    <div className={styleClass}>
      {!src ? (
        <a href="https://placeholder.com/">
          <img src="https://via.placeholder.com/400.png?text=Date+Me" />
        </a>
      ) : (
        <img src={src} alt={alt} />
      )}
      <div>{displayName && displayName.length >= 1 ? displayName : email}</div>
    </div>
  );
};

export default ProfileCard;
