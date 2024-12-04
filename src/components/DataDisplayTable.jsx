function DataDisplayTable({ fileContent }) {
  return (
    <div className="data-display-table">
      <h2>File Content:</h2>
      <pre>{fileContent}</pre>
    </div>
  );
}

export default DataDisplayTable;