import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TextFormNotes from "./TextFormNotes";
import FileUpload from "./FileUpload";
import NoteComponent from "./NoteComponent"; // Corrected component name

const Notes = ({ lecture }) => {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    if (lecture === "x") {
      setNote([]);
    }

    fetchNotes(); // Fetch notes when component mounts
    const interval = setInterval(fetchNotes, 2000); // Fetch notes every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [lecture]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        `http://3.12.108.173:4000/api/notes/byLecture/${lecture}`
      );
      setNote(response.data);
      //console.log(response.data)
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const updateNotes = async (newMessage) => {
    try {
      const updatedResponse = await axios.get("/api/notes");
      setNote(updatedResponse.data);
    } catch (error) {
      console.error("Error updating messages:", error);
    }
  };

  const [url, setUrl] = useState("");

  const handleUpload = (uploadedUrl) => {
    setUrl(uploadedUrl);
  };

  useEffect(() => {
    if (url) {
      const timer = setTimeout(() => {
        setUrl(""); // Reset URL to initial value after a certain delay
      }, 5000); // Change delay as per your requirement (here, it's 5000 milliseconds)

      return () => clearTimeout(timer); // Clean up the timer on unmount or when url changes
    }
  }, [url]);

  return (
    <div className="notes">
      <div className="section_title">Notes</div>
      <FileUpload setUrl={setUrl} onUpload={handleUpload} />
      <TextFormNotes lecId={lecture} url={url} updateNotes={updateNotes} />{" "}
      {/* Assuming updateNotes is a prop to update notes */}
      <div className="messages">
        {notes.map((note) => (
          <NoteComponent key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
