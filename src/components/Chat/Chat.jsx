import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const currentUser = useSelector((state) => state.firebase.auth);
  return <div>Chat</div>;
};

export default Chat;
