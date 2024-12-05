import { useState } from 'react';
import './App.css';
import BrowseFile from './components/BrowseFile';
import FilterMenu from './components/FilterMenu';
import TabManager from './components/TabManager';
import TabDataFrame from './components/TabDataFrame';

function App() {
  const [headers, setHeaders] = useState([]);
  const [file, setFile] = useState(null);
  const [xAxisHeaders, setXAxisHeaders] = useState([]);
  const [yAxisHeaders, setYAxisHeaders] = useState([]);
  const [tabDataFrame, setTabDataFrame] = useState(null);

  const handleFileNameChange = (file) => {
    const dataFrame = new TabDataFrame(file);
    setTabDataFrame(dataFrame);
    dataFrame.loadData().then(() => {
      setHeaders(dataFrame.getRawData().columns);
    });
  };

  return (
    <div className="app-container">
      <header>
        <BrowseFile onFileNameChange={handleFileNameChange} />
      </header>
      <div className="main-content">
        <FilterMenu headers={headers} onXAxisChange={setXAxisHeaders} onYAxisChange={setYAxisHeaders} />
        {tabDataFrame && <TabManager tabDataFrame={tabDataFrame} xAxisHeaders={xAxisHeaders} yAxisHeaders={yAxisHeaders} />}
      </div>
    </div>
  );
}

export default App;