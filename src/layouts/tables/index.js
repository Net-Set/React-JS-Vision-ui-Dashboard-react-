import React, { useState } from "react";
import Papa from "papaparse";
import { Button } from "@mui/material";
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
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <input
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload CSV File
        </Button>
      </label>
      {csvData.length > 0 && <Table data={csvData} />}
    </div>
  );
}

export default Tables;
