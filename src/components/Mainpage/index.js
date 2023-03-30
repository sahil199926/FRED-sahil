import { Box, Grid } from "@mui/material";
import React from "react";
// import { Bar } from "react-chartjs-2";
import {
  // BUDGET_CHART_DATA,
  // BUDGET_CHART_OPTION,
  page1Data,
  page1Key,
} from "../../assets/data/project";
import graph from "../../assets/img/graph.png";
import BarCard from "../common/BarCard";
import BarChart from "../common/BarChart";
import { BarChartPage1 } from "../common/BarChartPage1";
import Filters from "../common/Filters";
import GraphCard from "../common/GraphCard";
import PriseShowCard from "../common/PriseShowCard";
import CommonTable from "../common/Table";

import "./index.css";

export default function Mainpage() {
  return (
    <div 
    style={{
      marginTop:'60px'
    }}
    >
      <Filters />

      {/* Edit by gyan */}
      <div className="upperbar" style={{}}>
        <Box sx={{ width: { xs: "100%", sm: "16.68%" } }}>Safety</Box>
        <Box sx={{ width: { xs: "100%", sm: "58.34%" } }}>Budget</Box>
        <Box sx={{ width: { xs: "100%", sm: "16%" } }}>Progress</Box>
      </div>
      <Grid container spacing={1}>
        <Grid container item xs={12} lg={2} spacing={1}>
          {[0, 1, 2].map((data) => {
            return (
              <Grid
                style={{
                  display: "flex",
                }}
                item
                xs={4}
                lg={12}
                key={data}
              >
                <PriseShowCard
                  heading="Fatalities"
                  value="0"
                  currency="$"
                  subHeading="One TCO 2022 Target"
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container item xs={12} lg={4} spacing={1}>
          <Grid columnSpacing={1} container item lg={12}>
            {[0, 1].map((data) => {
              return (
                <Grid
                  style={{
                    display: "flex",
                  }}
                  item
                  xs={6}
                  lg={6}
                >
                  <BarCard heading="budget" currency="$" value="200M" />
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} lg={12}>
            <Box>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <BarChart bgColor="rgba(0, 0, 0, 0.87)" />
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={2} spacing={1}>
          {[0, 1, 2].map((data) => {
            return (
              <Grid item xs={4} lg={12} key={data}>
                <PriseShowCard
                  heading="Hours"
                  value="10K"
                  currency=""
                  subHeading=""
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} lg={4}>
          <div
            style={{
              backgroundColor: "white",
              height: "310px",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <div style={{ textAlign: "center" }}>Man Hour</div>
            <div style={{ height: "250px", padding: "8px" }}>
              <BarChartPage1 heading="Man Hours" />
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Table Start */}

      <div className="my-2">
        <CommonTable tableKey={page1Key} tableData={page1Data} />
      </div>

      {/* Table End */}
    </div>
  );
}
