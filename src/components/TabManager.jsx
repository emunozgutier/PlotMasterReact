import { useState } from 'react';
import PropTypes from 'prop-types';
import TabTable from './TabTable';
import TabPlot from './TabPlot';

function TabManager({ tabDataFrame, xAxisHeaders, yAxisHeaders }) {
  const [activeTab, setActiveTab] = useState('raw');

  let content;
  if (activeTab === 'raw') {
    content = <TabTable tabDataFrame={tabDataFrame} view={activeTab} xAxisHeaders={xAxisHeaders} yAxisHeaders={yAxisHeaders} />;
  } else {
    content = <TabPlot tabDataFrame={tabDataFrame} view={activeTab} xAxisHeaders={xAxisHeaders} yAxisHeaders={yAxisHeaders} />;
  }

  return (
    <div className="data-display-table">
      <h2>Data Display</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('raw')} className={`btn ${activeTab === 'raw' ? 'btn-primary' : 'btn-secondary'}`}>Raw Data</button>
        <button onClick={() => setActiveTab('filtered')} className={`btn ${activeTab === 'filtered' ? 'btn-primary' : 'btn-secondary'}`}>Filtered Data</button>
        <button onClick={() => setActiveTab('plotted')} className={`btn ${activeTab === 'plotted' ? 'btn-primary' : 'btn-secondary'}`}>Plotted Data</button>
      </div>
      <div className="tab-content">
        {content}
      </div>
    </div>
  );
}

TabManager.propTypes = {
  tabDataFrame: PropTypes.object.isRequired,
  xAxisHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  yAxisHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabManager;