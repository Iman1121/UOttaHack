import React from 'react';

const Message = ({ message }) => {
    return (
        <div className="message">
            <h3>{message.text}</h3>
            <p>{message.text}</p>
            <p>{message.timestamp}</p>
        </div>
    );
};

export default Message;
