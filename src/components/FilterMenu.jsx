import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faBan } from '@fortawesome/free-solid-svg-icons';

function FilterMenu({ headers, plotType, setPlotType, yAxis, setYAxis, xAxis, setXAxis }) {
  const [isAlphabetical, setIsAlphabetical] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const filteredHeaders = headers;

  const displayedHeaders = isAlphabetical
    ? [...filteredHeaders].sort()
    : filteredHeaders;

  const handleHeaderClick = (header) => {
    if (selectedBlock === 'y-axis') {
      if (!yAxis.includes(header)) {
        const newYAxis = [...yAxis, header];
        setYAxis(newYAxis);
      }
    } else if (selectedBlock === 'x-axis') {
      setXAxis(header);
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
            <select className="w-100" id="y-axis" value={yAxis} multiple>
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
            <select className="w-100" id="x-axis" value={xAxis}>
              {xAxis && <option value={xAxis}>{xAxis}</option>}
            </select>
          </div>
        </div>
        <div
          className={`h-25 container filter-block ${selectedBlock === 'plot-type' ? 'selected' : ''}`}
          onClick={() => setSelectedBlock('plot-type')}
        >
          <div className="row">
            <label htmlFor="plot-type">Plot Type:</label>
          </div>
          <div className="row">
            <select className="w-100" id="plot-type" value={plotType} onChange={(e) => setPlotType(e.target.value)}>
              <option value="scatter">Scatter</option>
              <option value="box">Box</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

FilterMenu.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  xAxis: PropTypes.string.isRequired,
  yAxis: PropTypes.arrayOf(PropTypes.string).isRequired,
  setXAxis: PropTypes.func.isRequired,
  setYAxis: PropTypes.func.isRequired,
  plotType: PropTypes.string.isRequired,
  setPlotType: PropTypes.func.isRequired,
};

export default FilterMenu;