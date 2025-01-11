import PropTypes from 'prop-types';
import FilterMenu from './FilterMenu';
import TabManager from './TabManager';
import {useState} from "react";

function WorkSpace({headers, tabDataFrame}) {
  const [xAxisHeaders, setXAxisHeaders] = useState([]);
  const [yAxisHeaders, setYAxisHeaders] = useState([]);

  return (
      <div className="row border">
        <div className="col-4">
          <FilterMenu  headers={headers} onXAxisChange={setXAxisHeaders}
                      onYAxisChange={setYAxisHeaders}/>
        </div>
        <div className="col-8">
          {tabDataFrame && <TabManager tabDataFrame={tabDataFrame} xAxisHeaders={xAxisHeaders}
                                       yAxisHeaders={yAxisHeaders}/>}
        </div>
      </div>
  );
}

        WorkSpace.propTypes = {
        tabDataFrame: PropTypes.object,
        headers: PropTypes.arrayOf(PropTypes.string).isRequired,
      };

        export default WorkSpace;