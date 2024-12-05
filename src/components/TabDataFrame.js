class TabDataFrame {
  constructor(file) {
    this.file = file;
    this.reader = new FileReader();
    this.reader.readAsText(file);
    this.file_text = this.reader.result;
    this.file_json = this.textToJson(this.file_text);
    this.df = this.jsonToDataFrame(this.file_json);
    this.df.print()
  }

  textToJson(text) {
    // Remove control characters
    const sanitizedText = text.replace(/[\x00-\x1F\x7F]/g, '');
    const rows = sanitizedText.split('\n');
    const headers = rows[0].split(',');
    const data = rows.slice(1).map(row => {
      const rowData = row.split(',');
      return headers.reduce((acc, header, index) => {
        acc[header] = rowData[index];
        return acc;
      }, {});
    });

    return { headers, data };
  }




  jsonToDataFrame(json) {
    const { headers, data } = json;
    return new dfd.DataFrame(data, { columns: headers });
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