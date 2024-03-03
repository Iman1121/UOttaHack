import React, { useState, useEffect } from 'react';
import CourseInfo from "../CourseInfo";
import HeaderContent from "../Header";
import Profile from "../Profile";
import Channels from "../Channels";
import Chat from "../Chat";
import Notes from "../Notes";

const Home = () => {

  const [course, setCourse] = useState('');

  const handleSelect = (value) => {
    setCourse(value);
    setLecture("x");
  };

  const [lecture, setLecture] = useState('');

  const handleLecture = (value) => {
    setLecture(value);
    console.log(lecture)
  };

  return (
    <div className="Home">
      <header className="header">
        <div className="section0">
          <CourseInfo onSelect = {handleSelect}/>
        </div>
        {/* <div className="section0">
          <HeaderContent />
        </div> */}
        <div className="section1">
          <Profile />
        </div>
      </header>

      <main className="main-content">
        <div className="sectionChannel">
          <Channels course = {course} onSelect = {handleLecture}/>
        </div>
        <div className="section2">
          <Chat lecture = {lecture}/>
        </div>
        <div className="section2">
          <Notes lecture = {lecture}/>
        </div>
      </main>
    </div>
  );
};

export default Home;
