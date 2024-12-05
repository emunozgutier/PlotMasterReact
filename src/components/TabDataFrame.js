class TabDataFrame {
  constructor(fileContent) {
    this.fileContent = fileContent;
    this.dataFrame = null;
    this.loadData();
  }

  loadData() {
    const rows = this.fileContent.split('\n').map(row => row.split(','));
    const headers = rows[0];
    const data = rows.slice(1);
    this.dataFrame = new window.dfd.DataFrame(data, { columns: headers });
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