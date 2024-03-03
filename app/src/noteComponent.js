import React from 'react';

const NoteComponent = ({ note }) => {
  if (note.pictureURI === "") {
    return (
      <div className="note-container" style={{ backgroundColor: 'rgb(204, 113, 120)', borderRadius: '10px', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <div className="note-text">
          <h3 style={{ color: 'white', margin: '0', paddingBottom: "8px", paddingTop: "2px", paddingLeft: "10px" }}>{note.response}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="note-container" style={{ backgroundColor: 'rgb(204, 113, 120)', borderRadius: '10px', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <div className="note-image" style={{ maxWidth: '100%', maxHeight: '200px', overflow: 'hidden', padding: '10px' }}>
          <img src={note.pictureURI} alt="Message Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </div>
    );
  }
};

export default NoteComponent;
