import { useState } from 'react';

function BrowseFile({ onHeadersChange, onFileContentChange }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        onFileContentChange(content);
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
    </div>
  );
}

export default BrowseFile;