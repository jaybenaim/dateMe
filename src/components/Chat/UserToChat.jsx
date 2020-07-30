import React from "react";
import { Card, Image } from "react-bootstrap";

const UserToChat = ({
  chatDetails: {
    previewText,
    time,
    receivingUser: { name: receivingUsername, avatar: receivingAvatar },
    currentUser: { name: currentUsername, avatar: currentUserAvatar },
  },
}) => {
  return (
    <>
      <Image
        src={receivingAvatar}
        height="50px"
        width="50px"
        className="image"
        roundedCircle
      />
      <Card.Title className="title">{receivingUsername}</Card.Title>
      <Card.Text className="preview-text">{previewText}</Card.Text>
    </>
  );
};

export default UserToChat;
