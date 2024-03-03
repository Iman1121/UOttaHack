import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import TextFormNotes from './TextFormNotes'; 
import FileUpload from './FileUpload';
import NoteComponent from './NoteComponent'; // Corrected component name

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(); // Fetch notes when component mounts
    const interval = setInterval(fetchNotes, 2000); // Fetch notes every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };
  const updateNotes = async (newMessage) => {
    try {
      
     
      const updatedResponse = await axios.get('/api/notes');
      setNotes(updatedResponse.data);
      
    } catch (error) {
      console.error('Error updating messages:', error);
    }
  };
  const [url, setUrl] = useState('');

  const handleUpload = (uploadedUrl) => {
    setUrl(uploadedUrl);
  };

  return (
    <div className="notes">
      <div className="section_title">Notes</div>
      
      <FileUpload setUrl={setUrl} onUpload={handleUpload}/>
      <TextFormNotes url={url} updateNotes={updateNotes}/> {/* Assuming updateNotes is a prop to update notes */}
      <div className="messages">
        {notes.map(note => (
          <NoteComponent key={note.id} note={note} />
        ))}
      </div> 
    </div>
  );
};

export default Notes;
