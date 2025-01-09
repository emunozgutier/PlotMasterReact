import PropTypes from 'prop-types';
import WorkSpace from './WorkSpace.jsx';
import {useState} from "react";

function WorkSpaceManager({headers, tabDataFrame}) {

  return (
    <>
      <WorkSpace headers={headers}
                 tabDataFrame={tabDataFrame} />
    </>
  );
}

WorkSpaceManager.propTypes = {
  tabDataFrame: PropTypes.object,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkSpaceManager;