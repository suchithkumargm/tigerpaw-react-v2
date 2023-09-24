import React, { useState } from 'react';

import './Dropdown.css';

function Dropdown({ options, defaultOption }) {
  const [selectedValue, setSelectedValue] = useState(defaultOption || '');

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  return (
    <>
    {/* <div className='dropdown'> */}
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="">{defaultOption || 'Select an option'}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {console.log(`You selected: ${selectedValue}`)}
    {/* </div> */}
    </>
  );
}

export default Dropdown;
