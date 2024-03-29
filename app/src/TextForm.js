import React, { useState } from 'react';
import axios from 'axios';
const TextForm = ({lecId,url, updateMessages} ) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(inputValue !== "" || url !== ""){
      try {
        console.log(url);
        await axios.post('http://localhost:4000/api/messages',{lecId:lecId, userId: 50, userName: "brian", text: inputValue, pictureURI: url, isNote: false});
        updateMessages({ text: inputValue }); // Trigger message update in parent component
        setInputValue('');
      } catch (error) {
        console.error('Error submitting message:', error);
        setInputValue('');
      }
    }
    
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="" 
        style={{ marginRight: '10px', flex: 1, outlineColor: 'rgb(137, 2, 62)' }}
      />
       <button type="submit" style={{ backgroundColor: 'rgb(204,113,120)', color: 'white', border: 'none', borderRadius: '5px', padding: '8px 16px' }}>Submit</button>
    </form>
  );
};

export default TextForm;
