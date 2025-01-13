import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faBan } from '@fortawesome/free-solid-svg-icons';

function FilterMenu({ headers, onXAxisChange, onYAxisChange }) {
  const [yAxis, setYAxis] = useState([]);
  const [xAxis, setXAxis] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAlphabetical, setIsAlphabetical] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const filteredHeaders = headers.filter(header =>
    header.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedHeaders = isAlphabetical
    ? [...filteredHeaders].sort()
    : filteredHeaders;

  const handleHeaderClick = (header) => {
    if (selectedBlock === 'y-axis') {
      if (!yAxis.includes(header)) {
        const newYAxis = [...yAxis, header];
        setYAxis(newYAxis);
        onYAxisChange(newYAxis);
      }
    } else if (selectedBlock === 'x-axis') {
      setXAxis(header);
      onXAxisChange([header]);
    }
  };

  return (
    <div className="filter-menu row h-100 border">
      <div className="headers col-6">
        <button onClick={() => setIsAlphabetical(!isAlphabetical)}>
          <FontAwesomeIcon icon={isAlphabetical ? faBan : faSortAlphaDown} />
        </button>
        <ul>
          {displayedHeaders.map((header, index) => (
            <li key={index} onClick={() => handleHeaderClick(header)}>{header}</li>
          ))}
        </ul>
      </div>
      <div className="filter-blocks col-6">
        <div
            className={`h-25 container filter-block ${selectedBlock === 'y-axis' ? 'selected' : ''}`}
            onClick={() => setSelectedBlock('y-axis')}
        >
            <div className="row">
              <label htmlFor="y-axis">Y-Axis:</label>
            </div>
            <div className="row">
              <select id="y-axis" value={yAxis} multiple>
                {yAxis.map((header, index) => (
                    <option key={index} value={header}>{header}</option>
                ))}
              </select>
            </div>
        </div>
        <div
            className={`h-25 container filter-block ${selectedBlock === 'x-axis' ? 'selected' : ''}`}
            onClick={() => setSelectedBlock('x-axis')}
        >
          <div className="row">
            <label htmlFor="x-axis">X-Axis:</label>
          </div>
          <div className="row">
            <select id="x-axis" value={xAxis}>
              {xAxis && <option value={xAxis}>{xAxis}</option>}
            </select>
          </div>
          </div>
        </div>
      </div>
      );
      }

      FilterMenu.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onXAxisChange: PropTypes.func.isRequired,
  onYAxisChange: PropTypes.func.isRequired,
};

export default FilterMenu;