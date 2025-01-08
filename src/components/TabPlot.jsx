import { useEffect } from 'react';
import PropTypes from 'prop-types';

function TabPlot({ tabDataFrame, xAxisHeaders, yAxisHeaders }) {
  useEffect(() => {
    const xdata = tabDataFrame.getColumn(xAxisHeaders[0]);
    const data = yAxisHeaders.map((yAxisHeader) => {
      const ydata = tabDataFrame.getColumn(yAxisHeader);
      return {
        x: xdata,
        y: ydata,
        mode: 'markers',
        type: 'scatter',
        name: yAxisHeader,
      };
    });

    Plotly.newPlot('myDiv', data);
  }, [tabDataFrame, xAxisHeaders, yAxisHeaders]);

  return (
    <div className="myDiv">
      <div id="myDiv"></div>
    </div>
  );
}

TabPlot.propTypes = {
  tabDataFrame: PropTypes.object.isRequired,
  xAxisHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  yAxisHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabPlot;