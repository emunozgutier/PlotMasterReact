import PropTypes from 'prop-types';
import WorkSpace from './WorkSpace';
import {useState} from "react";

function WorkSpaceManager({headers, tabDataFrame}) {
  const [xAxisHeaders, setXAxisHeaders] = useState([]);
  const [yAxisHeaders, setYAxisHeaders] = useState([]);
  return (
    <>
      <WorkSpace headers={headers}
                 xAxisHeaders={xAxisHeaders}
                 setXAxisHeaders={setXAxisHeaders}
                 yAxisHeaders={yAxisHeaders}
                 setYAxisHeaders={setYAxisHeaders}
                 tabDataFrame={tabDataFrame}
      />
    </>
  );
}

WorkSpaceManager.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabDataFrame: PropTypes.object,
};

export default WorkSpaceManager;