import React from 'react';
import './App.css'; 

const LectureComponent = ({ lec }) => {
  return (
    <button className="lecture-button" style={{ backgroundColor: 'rgb(204, 113, 120)', padding: '10px', borderRadius: '10px', marginBottom: '20px', width: '100%', display: 'block', border: 'none', cursor: 'pointer' }}>
      <div className="lecture-text" style={{ flex: 1 }}>
        <h3 style={{ margin: '10px 0', display: 'inline-block',  color: 'white' }}>{lec.lecNum}-</h3>
        <h3 style={{ margin: '10px 0', display: 'inline-block', color: 'white' }}>{lec.courseCode}</h3>
      </div>
    </button>
  );
};

export default LectureComponent;