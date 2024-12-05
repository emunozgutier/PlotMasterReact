import PropTypes from 'prop-types';

function BrowseFile({ onFileContentChange }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      onFileContentChange(e.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className="browse-file">
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
}

BrowseFile.propTypes = {
  onFileContentChange: PropTypes.func.isRequired,
};

export default BrowseFile;