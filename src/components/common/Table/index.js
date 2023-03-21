import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { Link } from "react-router-dom";



const CommonTable = ({tableKey,tableData}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), #FFFFFF",
          }}
        >
          <TableRow sx={{ padding: "6px" }}>
            {tableKey.map((column) => {
              return (
                <TableCell sx={{ padding: "6px" }} key={column}>
                  {column.lable}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data, idx) => {
            return (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {tableKey.map((column) => {
                  return column.key === "status" ? (
                    <TableCell
                      sx={{
                        padding: "6px",
                        color:
                        data[column.key].toLowerCase() === "active"
                        ? "#3B873E"
                        : data[column.key].toLowerCase() === "cancelled"
                        ? "#F44336"
                        : data[column.key].toLowerCase() === "on hold"
                        ? "#26C6DA"
                        : data[column.key].toLowerCase() === "execution"
                        ? "#FFEE58"
                        : "#8BC34A",
                      }}
                    >
                      {data[column.key]}
                    </TableCell>
                  ):column.key === "action" ? (
                    <TableCell sx={{ padding: "6px",color:"rgb(0, 101, 177)" }}>
                      {data[column.key]}
                    </TableCell>
                  ) :(
                    <TableCell sx={{ padding: "6px" }}>
                      {data[column.key]}
                    </TableCell>
                  ) 
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
