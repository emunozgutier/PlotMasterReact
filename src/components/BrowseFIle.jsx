import { useState } from 'react';

function BrowseFile({ onHeadersChange }) {
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
        const lines = content.split('\n');
        if (lines.length > 0) {
          const headers = lines[0].split(',');
          onHeadersChange(headers);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="browse-file">
      <input type="file" onChange={handleFileChange} />
      {fileContent && (
        <div>
          <h2>File Content:</h2>
          <pre>{fileContent}</pre>
        </div>
      )}
    </div>
  );
}

export default BrowseFile;