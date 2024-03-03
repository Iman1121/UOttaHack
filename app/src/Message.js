import React from 'react';

const Message = ({ message }) => {
  if (message.pictureURI === "") {
    return (
      <div className="message-container" style={{ backgroundColor: 'rgb(204, 113, 120)', borderRadius: '10px', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <div className="user-id" style={{ paddingTop: "5px", paddingLeft: "10px", fontSize: '15px', color: 'white', margin: '0' }}>
          <p style={{ margin: '0' }}>{message.userName}:</p>
        </div>
        <div className="message-text">
          <h3 style={{ color: 'white', margin: '0', paddingBottom: "8px", paddingLeft: "10px" }}>{message.text}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="message-container" style={{ backgroundColor: 'rgb(204, 113, 120)', borderRadius: '10px', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <div className="user-id" style={{ paddingTop: "5px", paddingLeft: "10px", paddingRight: "10px", fontSize: '15px', color: 'white', margin: '0' }}>
          <p style={{ margin: '0' }}>{message.userName}:</p>
        </div>
        <div className="message-image" style={{ maxWidth: '100%', maxHeight: '200px', overflow: 'hidden', padding: '10px' }}>
          <img src={message.pictureURI} alt="Message Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </div>
    );
  }
};

export default Message;
