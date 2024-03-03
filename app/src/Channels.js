import React, { useState, useEffect } from "react";
import axios from "axios";
import LectureComponent from "./LectureComponent"; // Component names should start with a capital letter
import "./App.css";

const channelClass = {
  justifyContent: "space-between",
  fontWeight: "bold",
  borderRadius: "5px",
  color: "black",
  paddingBottom: "10px",
};

const Channels = ({ course, onSelect }) => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    if (course.trim() !== "") {
      // Check if course is not empty or just whitespace
      setLectures([]);
      fetchLectures();
    }
  }, [course]); // Add course as a dependency to the useEffect hook

  const fetchLectures = async () => {
    try {
      const response = await axios.get(
        `http://3.12.108.173:4000/api/lectures/byCourse/${course}`
      );
      setLectures(response.data);
    } catch (error) {
      console.error("Error fetching lectures:", error);
    }
  };

  return (
    <div className="Channels">
      <div style={channelClass}>
        <div className="section_title">Channels</div>
      </div>
      <div className="lectures">
        {lectures.map((lec) => (
          <LectureComponent key={lec.courseCode} lec={lec} onClick={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default Channels;
