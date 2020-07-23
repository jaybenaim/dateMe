import React from "react";

const ProfileCard = ({
  src,
  alt,
  height = "100px",
  width = "100px",
  email,
  displayName,
  styleClass,
}) => {
  return (
    <div>
      <img src={src} alt={alt} height={height} width={width} />
      <div className={styleClass}>
        {displayName && displayName.length >= 1 ? displayName : email}
      </div>
    </div>
  );
};

export default ProfileCard;
