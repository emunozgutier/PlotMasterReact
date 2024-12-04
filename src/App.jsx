import { useState } from 'react';
import './App.css';
import BrowseFile from './components/BrowseFile';
import FilterMenu from './components/FilterMenu';
import DataDisplayTable from './components/DataDisplayTable';

function App() {
  const [headers, setHeaders] = useState([]);
  const [fileContent, setFileContent] = useState('');

  return (
    <div className="app-container">
      <header>
        <BrowseFile onHeadersChange={setHeaders} onFileContentChange={setFileContent} />
      </header>
      <div className="main-content">
        <FilterMenu headers={headers} />
        <DataDisplayTable fileContent={fileContent} />
      </div>
    </div>
  );
}

export default App;