import PropTypes from 'prop-types';

function TabTable({ tabDataFrame, view, xAxisHeaders, yAxisHeaders }) {
  let data;
  if (view === 'raw') {
    data = tabDataFrame.getRawData();
  } else if (view === 'filtered') {
    data = tabDataFrame.getFilteredData(xAxisHeaders, yAxisHeaders);
    console.log('Filtered Data:', data);
  }

  const headers = [...xAxisHeaders, ...yAxisHeaders];

  if (view === 'raw' || view === 'filtered') {
    return (
      <div className="table-container">
        <table className="table table-hover">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (view === 'plotted') {
    return <div>Plotted Data Content</div>;
  }
  return null;
}

TabTable.propTypes = {
  tabDataFrame: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired,
  xAxisHeaders: PropTypes.arrayOf(PropTypes.string),
  yAxisHeaders: PropTypes.arrayOf(PropTypes.string),
};

TabTable.defaultProps = {
  xAxisHeaders: [],
  yAxisHeaders: [],
};

export default TabTable;