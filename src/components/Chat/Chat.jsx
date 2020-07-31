import React from "react";

import { RiMessage3Line } from "react-icons/ri";
import "../../assets/stylesheets/chat.css";
import ChatWrapper from "./ChatWrapper";
import { useState } from "react";

const Chat = () => {
  const [chatIsOpen, toggleOpenChat] = useState(false);

  const handleOpenChat = () => {
    toggleOpenChat(!chatIsOpen);
  };

  return (
    <div>
      <RiMessage3Line className="chat-btn" onClick={handleOpenChat} />
      {/* display maximized chat */}
      {chatIsOpen && <ChatWrapper />}
    </div>
  );
};

export default Chat;
