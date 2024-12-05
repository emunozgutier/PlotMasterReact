import { useState } from 'react';
import './App.css';
import BrowseFile from './components/BrowseFile';
import FilterMenu from './components/FilterMenu';
import TabManager from './components/TabManager';
import TabDataFrame from './components/TabDataFrame';

function App() {
  const [headers, setHeaders] = useState([]);
  const [fileContent, setFileContent] = useState('');
  const [xAxisHeaders, setXAxisHeaders] = useState([]);
  const [yAxisHeaders, setYAxisHeaders] = useState([]);
  const [tabDataFrame, setTabDataFrame] = useState(null);

  const handleFileContentChange = (content) => {
    const dataFrame = new TabDataFrame(content);
    setTabDataFrame(dataFrame);
    setHeaders(dataFrame.getRawData().columns);
  };

  return (
    <div className="app-container">
      <header>
        <BrowseFile onFileContentChange={handleFileContentChange} />
      </header>
      <div className="main-content">
        <FilterMenu headers={headers} onXAxisChange={setXAxisHeaders} onYAxisChange={setYAxisHeaders} />
        {tabDataFrame && <TabManager tabDataFrame={tabDataFrame} xAxisHeaders={xAxisHeaders} yAxisHeaders={yAxisHeaders} />}
      </div>
    </div>
  );
}

export default App;