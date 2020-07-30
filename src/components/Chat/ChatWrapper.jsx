import React from "react";
import { Card } from "react-bootstrap";
import UserToChat from "./UserToChat";
import { useSelector } from "react-redux";

const ChatWrapper = () => {
  // fetch messages
  // users/{uid}/chats/
  // include presence from fb to show online or not
  const currentUser = useSelector((state) => state.firebase.profile);

  const timestamp = new Date();

  const chats = [
    {
      id: "id",
      previewText: "preview text-last message",
      time: timestamp.getTime(),
      requestedMessage: false,
      receivingUser: {
        name: "author.name",
        avatar: currentUser.avatarUrl,
      },
      currentUser: {
        name: currentUser.displayName,
        avatar: currentUser.avatarUrl,
      },
    },
  ];

  const chatElements = () => {
    return Object.keys(chats).map((chatId, i) => {
      return <UserToChat chatDetails={chats[chatId]} />;
    });
  };

  return (
    <Card className="chat-wrapper">
      <Card.Header as="h5">Chats</Card.Header>
      <Card.Body className="chat-body">{chatElements()}</Card.Body>
    </Card>
  );
};

export default ChatWrapper;
