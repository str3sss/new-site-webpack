import React from 'react';
import searchIcon from '../assets/search.svg';

function FilterPanel() {
  return (
    <div className="filter_panel">
      <button className="btn">
        <img src={searchIcon} alt="search" />
      </button>
      <div>
        <button className="btn">24 Hours</button>
        <button className="btn">7 Days</button>
        <button className="btn">30 Days</button>
        <button className="btn">All-Time</button>
      </div>
    </div>
  );
}

export default FilterPanel;
