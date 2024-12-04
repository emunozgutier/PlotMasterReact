import { useState } from 'react';
import PropTypes from 'prop-types';

function FilterMenu({ headers }) {
  const [yAxis, setYAxis] = useState('');
  const [xAxis, setXAxis] = useState('');

  return (
    <div className="filter-menu">
      <h2>Filter Menu</h2>
      <div className="filter-content">
        <div className="headers">
          <h3>CSV Data Headers</h3>
          <ul>
            {headers.map((header, index) => (
              <li key={index}>{header}</li>
            ))}
          </ul>
        </div>
        <div className="filter-blocks">
          <div className="filter-block">
            <label htmlFor="y-axis">Y-Axis:</label>
            <select id="y-axis" value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
              {headers.map((header, index) => (
                <option key={index} value={header}>{header}</option>
              ))}
            </select>
          </div>
          <div className="filter-block">
            <label htmlFor="x-axis">X-Axis:</label>
            <select id="x-axis" value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
              {headers.map((header, index) => (
                <option key={index} value={header}>{header}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

FilterMenu.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterMenu;