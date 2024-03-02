import React, { useState } from 'react';

const TextForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send the input value to a server or perform some action
    console.log('Form submitted with value:', inputValue);
    setInputValue('');
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
