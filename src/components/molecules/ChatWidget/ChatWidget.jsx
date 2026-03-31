"use client";
import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import classes from "./ChatWidget.module.css";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={classes.chatWidget}>
        <button
          className={classes.chatButton}
          onClick={toggleChat}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <span className={classes.iconWrapper} key={isOpen ? "close" : "open"}>
            {isOpen ? <FaTimes size={28} /> : <FaComments size={28} />}
          </span>
        </button>
      </div>
      {isOpen && (
        <div className={classes.chatContainer}>
          <iframe
            src="https://bottomline-it.co.za/im_livechat/loader/3"
            className={classes.chatIframe}
            title="Live Chat"
            allow="microphone; camera"
          />
        </div>
      )}
    </>
  );
}

