import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import TextForm from "./TextForm";
import FileUpload from "./FileUpload";
import Message from "./Message"; // Assuming you have a MessageComponent defined

const Chat = ({ lecture }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(messages);

    fetchMessages(); // Fetch messages when component mounts
    const interval = setInterval(fetchMessages, 2000); // Fetch messages every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [lecture]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `https://academeetbackend.vercel.app/api/messages/byLecture/${lecture}`
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  const updateMessages = async (newMessage) => {
    try {
      const updatedResponse = await axios.get("/api/messages");
      setMessages(updatedResponse.data);
    } catch (error) {
      console.error("Error updating messages:", error);
    }
  };

  const [url, setUrl] = useState("");

  const handleUpload = (uploadedUrl) => {
    setUrl(uploadedUrl);
  };

  return (
    <div className="Chat">
      <div className="section_title">Chat </div>

      <FileUpload setUrl={setUrl} onUpload={handleUpload} />
      <TextForm lecId={lecture} url={url} updateMessages={updateMessages} />
      <div className="messages">
        {messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
