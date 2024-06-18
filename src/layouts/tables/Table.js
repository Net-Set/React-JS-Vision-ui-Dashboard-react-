import React from "react";
import "./Table.css"; // Import your CSS file for styling
import VuiBox from "components/VuiBox"; // Assuming VuiBox is a Vision UI component

function Table({ data }) {
  if (data.length === 0) return null;

  // Assuming data[0] contains headers
  const headers = Object.keys(data[0]);

  return (
    <div className="table-container" >
      
      <VuiBox lx={{ height: "90%" }}>
        <table className="custom-table">
          <thead style={{backgroundColor:"ActiveBorder",color:"white"}}>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </VuiBox>
    </div>
  );
}

export default Table;
