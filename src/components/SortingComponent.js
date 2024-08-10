import React, { useState } from 'react';

const SortingComponent = ({ onSort }) => {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleApplyClick = () => {
    // Pass the selected sorting option to the parent component
    onSort(selectedOption);
  };

  return (
    <div className="sorting-container">
      <label>Sort By:</label>
      <select onChange={(e) => handleOptionChange(e.target.value)} value={selectedOption}>
        <option value="default">Default</option>
        <option value="deliveryTime">Delivery Time</option>
        <option value="costLowToHigh">Cost Low to High</option>
        <option value="costHighToLow">Cost High to Low</option>
      </select>
      <button onClick={handleApplyClick}>Apply</button>
    </div>
  );
};

export default SortingComponent;
