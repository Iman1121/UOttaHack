import React from 'react';

const CourseInfo = () => {
  const courseInfoStyle = {
    display: 'flex', // Set display to flex
    justifyContent: 'space-between', // Align items with space-between
    fontFamily: 'Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif',
    fontWeight: "bold",
    color:'white',
    borderRadius: '5px',
    padding: '10px', // Added padding for better spacing
  };

  const courseStyle = {
    fontSize: '24px',
  };

  const additionalInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={courseInfoStyle}>
      <div style={courseStyle}>
      <div>COMP2404</div>
      <div>Instructor: Darryl Hill</div>
      </div>
      
      <div style={additionalInfoStyle}>

        <div>Room: UC</div>
        <div>Time: 4pm-5:30pm</div>
      </div>
    </div>
  );
};

export default CourseInfo;
