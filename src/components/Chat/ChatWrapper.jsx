import React from "react";
import { Card } from "react-bootstrap";
import UserToChat from "./ChatRequest";
import { useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import { RiChatDownloadLine } from "react-icons/ri";

const ChatWrapper = () => {
  // fetch messages
  // users/{uid}/chats/
  // include presence from fb to show online or not

  const {
    auth: { uid },
    profile: currentUser,
    ordered: { chats },
  } = useSelector((state) => state.firebase);

  useFirebaseConnect([`chats/${uid}/chatRequests`]); // sync into redux

  // const chats = [
  //   {
  //     id: "id",
  //     previewText: "preview text-last message",
  //     time: timestamp.getTime(),
  //     requestedMessage: false,
  //     receivingUser: {
  //       name: "author.name",
  //       avatar: currentUser.avatarUrl || "",
  //     },
  //     currentUser: {
  //       name: currentUser.displayName,
  //       avatar: currentUser.avatarUrl || "",
  //     },
  //   },
  // ];

  const chatElements = () => {
    const chatRequests = chats && uid && chats[uid].chatRequests;

    return chatRequests ? (
      Object.keys(chatRequests).map((chatRequestId, i) => {
        return <UserToChat chatRequest={chatRequests[chatRequestId].value} />;
      })
    ) : (
      <div style={{ textAlign: "center", gridColumn: "1 / 3" }}>
        No chats available
      </div>
    );
  };

  return (
    <Card className="chat-wrapper">
      <Card.Header as="h5">Chats</Card.Header>
      <Card.Body className="chat-body">{chatElements()}</Card.Body>
    </Card>
  );
};

export default ChatWrapper;
