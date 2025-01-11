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
    <div className="app-container container border">
      <div className="container pb-10 mb-10 border">
        <BrowseFile onFileNameChange={handleFileNameChange} />
      </div >
      <div className="main-content container border pt-10 mt-10 ">
        <WorkSpaceManager headers={headers}
                   tabDataFrame={tabDataFrame}
        />
    </div>
    </div>
  );
}

export default App;