import React from 'react';

const LectureComponent = ({ lec }) => {
  return (
    <div className="lecture-container" style={{ backgroundColor: 'rgb(204,113,120)', borderRadius: '10px' }}>
      <div className="lecture-text" style={{ flex: 1 }}>
        <h3 style={{ margin: '10px 0' }}>{lec.lecNum}</h3>
        <p>This is some additional text.</p> {/* Add your text here */}
      </div>
    </div>
  );
};

export default LectureComponent;
