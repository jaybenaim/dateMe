import React from "react";
import { Card, Image } from "react-bootstrap";

const ChatRequest = ({
  chatRequest: {
    previewText,
    receivingUser: { avatar: receivingAvatar, name: receivingUsername },
    timestamp,
  },
}) => {
  return (
    <div className="chat-request">
      <Image
        src={receivingAvatar}
        height="50px"
        width="50px"
        className="image"
        roundedCircle
      />
      <Card.Title className="title">{receivingUsername}</Card.Title>
      <Card.Text className="preview-text">
        {previewText} - <span>{timestamp}</span>
        <div>Reply</div>
      </Card.Text>
    </div>
  );
};

export default ChatRequest;
