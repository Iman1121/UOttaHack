import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import TextForm from './TextForm'; 
import Message from './Message'; // Assuming you have a MessageComponent defined

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  const updateMessages = async () => {
    try {
      const response = await axios.get('/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error updating messages:', error);
    }
  };
  return (
    <div className="Chat">
      <div>Chat </div>
      <div className="Messages">
        {messages.map(message => (
          <Message key={message._id} message={message} />
        ))}
      </div>
      <TextForm updateMessages={updateMessages}/> 
    </div>
  );
};

export default Chat;
