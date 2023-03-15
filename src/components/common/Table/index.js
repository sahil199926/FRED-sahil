import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const tableHeadData = [
  "Project Number",
  "Project Title",
  "Project Engineer",
  "Project Category",
  "Current Project Status",
  "Action",
];

const tableBodyData = [
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Active",
  },
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Active",
  },
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Active",
  },
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Active",
  },
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Active",
  },
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Active",
  },
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Cancelled",
  },
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Active",
  },
  {
    number: "CP-21-3038",
    title: "RV OLD POTABLE WATERLINE REPAIR WORKS",
    engineer: "Kumiskaliyev A  Borissov S",
    category: "FMPG",
    status: "Active",
  },
  //   "View",
];

const CommonTable = () => {
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
            {tableHeadData.map((data) => {
              return (
                <TableCell sx={{ padding: "6px" }} key={data}>
                  {data}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyData.map((data, idx) => {
            return (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ padding: "6px" }}>{data.number}</TableCell>
                <TableCell sx={{ padding: "6px" }}>{data.title}</TableCell>
                <TableCell sx={{ padding: "6px" }}>{data.engineer}</TableCell>
                <TableCell sx={{ padding: "6px" }}>{data.category}</TableCell>
                <TableCell
                  sx={{
                    padding: "6px",
                    color:
                      data.status.toLowerCase() === "active"
                        ? "#3B873E"
                        : data.status.toLowerCase() === "cancelled"
                        ? "#F44336"
                        : "black",
                  }}
                >
                  {data.status}
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>
                  <Link>View</Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
