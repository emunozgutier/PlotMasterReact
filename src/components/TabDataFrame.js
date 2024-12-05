class TabDataFrame {
  constructor(fileContent) {
    this.fileContent = fileContent;
    this.dataFrame = null;
    this.loadData();
  }

  loadData() {
    const rows = this.fileContent.split('\n').map(row => row.split(','));
    this.dataFrame = new window.dfd.DataFrame(rows.slice(1), { columns: rows[0] });
  }

  getRawData() {
    return this.dataFrame;
  }

  getFilteredData(xAxisHeaders, yAxisHeaders) {
    const selectedHeaders = [...xAxisHeaders, ...yAxisHeaders];
    return this.dataFrame.loc({ columns: selectedHeaders });
  }
}

export default TabDataFrame;