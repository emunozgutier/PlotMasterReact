import { useState } from 'react';
import './App.css';
import BrowseFile from './components/BrowseFile';
import WorkSpace from "./components/WorkSpace.jsx";
import TabManager from './components/TabManager';
import TabDataFrame from './components/TabDataFrame';

function App() {
  const [headers, setHeaders] = useState([]);
  const [xAxisHeaders, setXAxisHeaders] = useState([]);
  const [yAxisHeaders, setYAxisHeaders] = useState([]);
  const [tabDataFrame, setTabDataFrame] = useState(null);

  const handleFileNameChange = async (file) => {
    const dataFrame = new TabDataFrame(file);
    await dataFrame.initialize(); // Wait for initialization to complete
    const dfheaders = dataFrame.df.$columns;
    setTabDataFrame(dataFrame);
    setHeaders(dfheaders);
  };

  return (
    <div className="app-container">
      <header>
        <BrowseFile onFileNameChange={handleFileNameChange} />
      </header>
      <div className="main-content">
        <WorkSpace headers={headers}
                   xAxisHeaders={xAxisHeaders}
                   setXAxisHeaders={setXAxisHeaders}
                   yAxisHeaders={yAxisHeaders}
                   setYAxisHeaders={setYAxisHeaders}
                   tabDataFrame={tabDataFrame}
        />
    </div>
    </div>
  );
}

export default App;