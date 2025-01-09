import { useState } from 'react';
import './App.css';
import BrowseFile from './components/BrowseFile';
import WorkSpaceManager from "./components/WorkSpaceManager.jsx";
import TabDataFrame from './components/TabDataFrame';

function App() {
  const [tabDataFrame, setTabDataFrame] = useState(null);
  const [headers, setHeaders] = useState([]);

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
        <WorkSpaceManager headers={headers}
            tabDataFrame={tabDataFrame}
        />
    </div>
    </div>
  );
}

export default App;