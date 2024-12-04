import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function DataDisplayTable({ fileContent }) {
  const [activeTab, setActiveTab] = useState('raw');
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    if (fileContent) {
      const rows = fileContent.split('\n');
      const data = rows.map(row => row.split(','));
      setParsedData(data);
    }
  }, [fileContent]);

  return (
    <div className="data-display-table">
      <h2>Data Display</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('raw')} className={`btn ${activeTab === 'raw' ? 'btn-primary' : 'btn-secondary'}`}>Raw Data</button>
        <button onClick={() => setActiveTab('filtered')} className={`btn ${activeTab === 'filtered' ? 'btn-primary' : 'btn-secondary'}`}>Filtered Data</button>
        <button onClick={() => setActiveTab('plotted')} className={`btn ${activeTab === 'plotted' ? 'btn-primary' : 'btn-secondary'}`}>Plotted Data</button>
      </div>
      <div className="tab-content">
        {activeTab === 'raw' && (
          <div className="table-container">
            <table className="table table-hover">
              <thead>
                <tr>
                  {parsedData[0] && parsedData[0].map((header, index) => (
                    <th key={index} scope="col">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {parsedData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'filtered' && (
          <div className="table-container">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Y-Axis</th>
                  <th scope="col">X-Axis</th>
                </tr>
              </thead>
              <tbody>
                {parsedData[0] && parsedData[0].map((header, index) => (
                  <tr key={index}>
                    <td>{header}</td>
                    <td>{header}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'plotted' && <div>Plotted Data Content</div>}
      </div>
    </div>
  );
}

DataDisplayTable.propTypes = {
  fileContent: PropTypes.string.isRequired,
};

export default DataDisplayTable;