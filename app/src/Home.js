import React from 'react';
import CourseInfo from './CourseInfo';
import HeaderContent from './Header';
import Profile from './Profile';
import Channels from './Channels';
import Chat from './Chat';
import Notes from './Notes';

const Home = () => {
  return (
    <div className="Home">
      <header className="header">
        <div className="section0">
          <CourseInfo />
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
   
            <Channels />
         
        </div>
        <div className="section2">
          
            <Chat />
        
        </div>
        <div className="section2">
         
            <Notes />
         
        </div>
      </main>
    </div>
  );
};

export default Home;
