import PropTypes from 'prop-types';
import FilterMenu from './FilterMenu';
import TabManager from './TabManager';

function WorkSpace({headers, xAxisHeaders, setXAxisHeaders, yAxisHeaders, setYAxisHeaders, tabDataFrame}) {
  return (
    <>
      <FilterMenu headers={headers} onXAxisChange={setXAxisHeaders} onYAxisChange={setYAxisHeaders} />
      {tabDataFrame && <TabManager tabDataFrame={tabDataFrame} xAxisHeaders={xAxisHeaders} yAxisHeaders={yAxisHeaders} />}
    </>
  );
}

WorkSpace.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  setXAxisHeaders: PropTypes.func.isRequired,
  setYAxisHeaders: PropTypes.func.isRequired,
  xAxisHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  yAxisHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabDataFrame: PropTypes.object,
};

export default WorkSpace;