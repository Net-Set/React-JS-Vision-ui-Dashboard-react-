import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

function EnhancedTable({ data }) {
  if (data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} style={{ marginLeft: "10%" }}>
      <Table>
        <TableHead style={{ backgroundColor: "lightblue" }}>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
    
        <TableBody style={{ backgroundColor: "white" }}>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers.map((header, index) => (
                <TableCell key={index} align="center">{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default EnhancedTable;
