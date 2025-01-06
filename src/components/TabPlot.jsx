import PropTypes from 'prop-types';
import { useEffect } from 'react';

function TabPlot({ tabDataFrame, xAxisHeaders, yAxisHeaders }) {
  useEffect(() => {
    var xdata = tabDataFrame.getColumn(xAxisHeaders[0]);

    //for all ydata get the column
    var ydata = tabDataFrame.getColumn(yAxisHeaders[0]);
    var trace3 = {
      x: xdata.values,
      y: ydata.values,
      mode: 'lines+markers',
      type: 'scatter'
    };
    var data = [trace3];
    window.plotData = data
    console.log("plotly will plot this data");
    console.log(data);
    Plotly.newPlot('myDiv', data);

  }, [tabDataFrame]);

  return (
    <div className="plot-container">
      <div id="myDiv"></div>
    </div>
  );
}

TabPlot.propTypes = {
  tabDataFrame: PropTypes.object.isRequired,
  xAxisHeaders: PropTypes.arrayOf(PropTypes.string),
  yAxisHeaders: PropTypes.arrayOf(PropTypes.string),
};

TabPlot.defaultProps = {
  xAxisHeaders: [],
  yAxisHeaders: [],
};

export default TabPlot;