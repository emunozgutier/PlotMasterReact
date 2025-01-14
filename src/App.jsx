import { useState } from 'react';
import './App.css';
import BrowseFile from './components/BrowseFile';
import WorkSpaceManager from "./components/WorkSpaceManager";
import TabDataFrame from './components/TabDataFrame';

function App() {
  const [headers, setHeaders] = useState([]);
  const [tabDataFrame, setTabDataFrame] = useState(null);

  const handleFileNameChange = async (file) => {
    const dataFrame = new TabDataFrame(file);
    await dataFrame.initialize(); // Wait for initialization to complete
    const dfheaders = dataFrame.df.$columns;
    setTabDataFrame(dataFrame);
    setHeaders(dfheaders);
  };

  return (
    <div className="app-container container h-100 ">
      <div className="container m-2">
        <BrowseFile onFileNameChange={handleFileNameChange} />
      </div>
      <div className="main-content container border m-2 h-100">
        <WorkSpaceManager headers={headers}
                   tabDataFrame={tabDataFrame}
        />
    </div>
    </div>
  );
}

export default App;