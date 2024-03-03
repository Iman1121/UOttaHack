import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Message = ({ message }) => {
  const [username, setUsername] = useState(null);

  return (
    <div className="message-container" style={{ backgroundColor: 'rgb(204,113,120)', borderRadius: '10px'}}>
      <div className="message-text" style={{ flex: 1 }}>
      <h3 style={{ margin: '10px 0' }}>{message.text}</h3>
      </div>
      <div className="user-id" style={{ alignSelf: 'flex-end', fontSize: '12px' }}>
        <p>{message.userId}</p>
      </div>
    </div>
  );
};

export default Message;
