import React, { useState, useEffect } from 'react';
import axios from 'axios';
import lectureComponent from './lectureComponent'; // Component names should start with a capital letter
import './App.css';

const Channels = () => {
  const [lectures, setLectures] = useState([]); // Changed from setCourses to setLectures

  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchLectures = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/lectures');
      setLectures(response.data); // Changed from setCourses to setLectures
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching lectures:', error); // Changed from 'Error fetching messages' to 'Error fetching lectures'
    }
  };

  const [url, setUrl] = useState('');

  const handleUpload = (uploadedUrl) => {
    setUrl(uploadedUrl);
  };

  return (
    <div className="Channels">
      <div>Channels</div>
      <div className="lectures">
        {lectures.map(lec => ( // Changed from Courses.map to lectures.map
        
          <lectureComponent key={lec.courseCode} lecrue={lec  } /> // Changed from lectureComponent to LectureComponent
        ))}
      </div>
    </div>
  );
};

export default Channels;
