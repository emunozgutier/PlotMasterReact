class TabDataFrame {
  constructor(file) {
    this.file = file;
    this.reader = new FileReader();
    this.reader.readAsText(file);
    this.initialize();
  }

  async initialize() {
    await this.waitUntilReadyStateIsOk();
    this.file_text = this.reader.result;
    this.file_json = this.textToJson(this.file_text);
    this.df = this.jsonToDataFrame(this.file_json);
    this.df.print();
  }

  waitUntilReadyStateIsOk() {
    return new Promise((resolve, reject) => {
      this.reader.onload = () => {
        if (this.reader.readyState === 2) {
          const checkResult = () => {
            if (this.reader.result !== null) {
              setTimeout(() => {
                console.log(this.reader.result); // Print the result
                resolve();
              }, 10);
            } else {
              setTimeout(checkResult, 10);
            }
          };
          checkResult();
        }
      };
    });
  }

  textToJson(text) {
    if (text === null) {
      text = this.reader.result;
    }
    const sanitizedText = text.replace(/[\x00-\x09\x0B-\x1F\x7F]/g, '');
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
    return this.df.$data;
  }

  getFilteredData(xAxisHeaders, yAxisHeaders) {
    const selectedHeaders = [...xAxisHeaders, ...yAxisHeaders];
    const ans = this.df.loc({ columns: selectedHeaders });
    return ans.$data;
  }
}

export default TabDataFrame;