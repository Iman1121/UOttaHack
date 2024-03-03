import React, { useState } from 'react';
import './Dropdown.css'; // Import CSS file for styling

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className="custom-dropdown" // Apply custom class for styling
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;