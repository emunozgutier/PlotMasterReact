import PropTypes from 'prop-types';
import FilterMenu from './FilterMenu';
import TabManager from './TabManager';
import {useState} from "react";

function WorkSpace({headers, xAxisHeaders, setXAxisHeaders, yAxisHeaders, setYAxisHeaders, tabDataFrame}) {
  // const [xAxisHeaders, setXAxisHeaders] = useState([]);
  // const [yAxisHeaders, setYAxisHeaders] = useState([]);

  return (
      <div className="row h-100">
          <div className="col-4 h-100">
              <FilterMenu
                  headers={headers}
                  yAxis={yAxisHeaders}
                  setYAxis={setYAxisHeaders}
                  xAxis={xAxisHeaders}
                  setXAxis={setXAxisHeaders}
              />
          </div>

          <div className="col-8 h-100">
              {tabDataFrame &&
                  <TabManager
                      tabDataFrame={tabDataFrame}
                      xAxisHeaders={xAxisHeaders}
                      yAxisHeaders={yAxisHeaders}
                  />}

          </div>
      </div>
  );
}

WorkSpace.propTypes = {
    tabDataFrame: PropTypes.object,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    xAxisHeaders: PropTypes.string.isRequired,
    setXAxisHeaders: PropTypes.func.isRequired,
    yAxisHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
    setYAxisHeaders: PropTypes.func.isRequired,

};

export default WorkSpace;