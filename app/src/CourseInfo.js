import React, { useState } from 'react';
import Dropdown from './Dropdown';

const CourseInfo = ({onSelect}) => {
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
      <div>
        <Dropdown options = {["COMP2404", "COMP2406"]} onSelect={onSelect}/>
      </div>
      <div>Instructor: Darryl Hill</div>
      </div>
      
      <div style={additionalInfoStyle}>

        <div>Day: Monday</div>
        <div>Time: 4pm-5:30pm</div>
      </div>
    </div>
  );
};

export default CourseInfo;
