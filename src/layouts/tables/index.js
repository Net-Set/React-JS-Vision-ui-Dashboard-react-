import React, { useState } from "react";
import Papa from "papaparse";
import Table from "./Table"; // Assuming you have a Table component

function Tables() {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true,
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {csvData.length > 0 && <Table data={csvData} />}
    </div>
  );
}

export default Tables;
