import PropTypes from 'prop-types';
import FilterMenu from './FilterMenu';
import TabManager from './TabManager';
import {useState} from "react";

function WorkSpace({headers, tabDataFrame}) {
  const [xAxisHeaders, setXAxisHeaders] = useState([]);
  const [yAxisHeaders, setYAxisHeaders] = useState([]);

  return (
    <>
      <FilterMenu headers={headers} onXAxisChange={setXAxisHeaders} onYAxisChange={setYAxisHeaders} />
      {tabDataFrame && <TabManager tabDataFrame={tabDataFrame} xAxisHeaders={xAxisHeaders} yAxisHeaders={yAxisHeaders} />}
    </>
  );
}

WorkSpace.propTypes = {
  tabDataFrame: PropTypes.object,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkSpace;