import React from 'react';

const noteComponent = ({ note }) => {

  return (
    <div className="note-container" style={{ backgroundColor: 'rgb(204, 113, 120)', borderRadius: '10px', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>

      <div className="note-text">
        <h3 style={{color: 'white', margin: '0',paddingBottom:"8px", paddingLeft:"10px" }}>{note.response}</h3>
      </div>
    </div>
  );
};

export default noteComponent;