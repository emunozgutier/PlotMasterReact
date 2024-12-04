import PropTypes from 'prop-types';

function BrowseFile({ onHeadersChange, onFileContentChange }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const headers = content.split('\n')[0].split(',');
      onHeadersChange(headers);
      onFileContentChange(content);
    };
    reader.readAsText(file);
  };

  return (
    <input type="file" onChange={handleFileChange} />
  );
}

BrowseFile.propTypes = {
  onHeadersChange: PropTypes.func.isRequired,
  onFileContentChange: PropTypes.func.isRequired,
};

export default BrowseFile;