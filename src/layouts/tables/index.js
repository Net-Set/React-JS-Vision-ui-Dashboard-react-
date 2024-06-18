import React, { useState } from "react";
import Papa from "papaparse";
import { Button } from "@mui/material";
import Table from "./Table"; // Assuming you have a Table component

function Tables() {
  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Displaying selected file name
    setFileName(file.name);

    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true,
    });
  };

  const handleReset = () => {
    // Resetting state when reset button is clicked
    setCsvData([]);
    setFileName("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center",marginTop:"50px",marginRight:"30px" }}>
      <input
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          {fileName ? `Change File (${fileName})` : "Upload CSV File"}
        </Button>
      </label>
      {csvData.length > 0 && (
        <Button variant="outlined" onClick={handleReset} style={{ marginLeft: "10px" }}>
          Reset
        </Button>
      )}
      {csvData.length > 0 && <Table data={csvData} />}
    </div>
  );
}

export default Tables;
