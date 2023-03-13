import React from "react";
import {
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { dropDown1, dropDown2, dropDown3 } from "../../assets/data/project";
import "./btn.css";

export default function Filters() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "15px",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <TextField
        size="small"
        variant="outlined"
        //   margin="dense"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <IconButton sx={{ position: "relative", right: "10px" }}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      <TextField
        id="outlined-select-currency"
        size="small"
        select
        // label="Select"
        defaultValue="FACILITY"
        // helperText="Please select your currency"
        sx={{
          width: "175px",
        }}
      >
        {dropDown1.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        size="small"
        select
        // label="Select"
        defaultValue="CATEGORY"
        // helperText="Please select your currency"
        sx={{
          width: "175px",
        }}
      >
        {dropDown2.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        size="small"
        select
        // label="Select"
        defaultValue="PHASE"
        // helperText="Please select your currency"
        sx={{
          width: "175px",
        }}
      >
        {dropDown3.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <button className="firstPage-button">
        <i className="bi bi-plus"></i> Start A project
      </button>
    </div>
  );
}
