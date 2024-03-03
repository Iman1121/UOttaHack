import React from 'react';
import './App.css';

const LectureComponent = ({ lec, onClick }) => {
  const handleClick = () => {
    onClick(lec._id); // Call the onClick handler with lec.lecNum as the argument
  };

  return (
    <button
      className="lecture-button"
      style={{
        backgroundColor: 'rgb(204, 113, 120)',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '20px',
        width: '100%',
        display: 'block',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={handleClick} // Call handleClick when the button is clicked
    >
      <div className="lecture-text" style={{ flex: 1 }}>
        <h3 style={{ margin: '10px 0', display: 'inline-block', color: 'white' }}>{lec.lecNum}-</h3>
        <h3 style={{ margin: '10px 0', display: 'inline-block', color: 'white' }}>{lec.courseCode}</h3>
      </div>
    </button>
  );
};

export default LectureComponent;
