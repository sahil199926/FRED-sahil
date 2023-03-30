import React from "react";
import { Box, Grid } from "@mui/material";

import graph from "../../assets/img/graph.png";
import fieldMap from "../../assets/img/field-map.png";

import "./index.css";
import GraphCard from "../common/GraphCard";
import Page2Table from "../common/Page2Table";
import {
  page2Data,
  page2Key,
  page2MiddleData,
  page2MiddleKey,
  PROJECT,
} from "../../assets/data/project";
import { BarChartPage1 } from "../common/BarChartPage1";

function ProjectOverview() {
  return (
    <>
      <Box sx={{}}>
        <Box sx={{ backgroundColor: "white", margin: "5px" }}>
          <Box sx={{ fontSize: "14px", textAlign: "center", padding: "8px" }}>
            <b>TOP 5 – Save A Life Focus Areas</b>
          </Box>
          <Box sx={{ display: "flex" }}>
            <div
              className="scroll"
              style={{ display: "flex", overflowX: "scroll" }}
            >
              {PROJECT.map((data) => {
                return (
                  <div
                    className="slideNav"
                    style={{
                      backgroundColor:
                        data.status.toLowerCase() === "active"
                          ? "#3B873E"
                          : data.status.toLowerCase() === "cancelled"
                          ? "#F44336"
                          : data.status.toLowerCase() === "on hold"
                          ? "#26C6DA"
                          : data.status.toLowerCase() === "execution"
                          ? "#FFEE58"
                          : "#8BC34A",
                    }}
                  >
                    {data.title.substring(0, 9)}
                  </div>
                );
              })}
            </div>
          </Box>
        </Box>
      </Box>

      {/* Page start */}

      <Grid container spacing={1}>
        <Grid item xs={12} sm={5}>
          <Box>
            <GraphCard graph={fieldMap} heading="Man Hours" height="300" />
          </Box>
        </Grid>
        <Grid container item xs={12} sm={7}>
          {[0, 1, 2].map((data) => {
            return (
              <Grid item xs={6} sm={3}>
                <div className="flex" style={{ height: "136px" }}>
                  <div>Fatalities</div>
                  <div style={{ fontSize: "28px", color: "#3B873E" }}>0</div>
                  <div>One TCO 2022 Target</div>
                  <div>-</div>
                  <div>2022 YTD</div>
                </div>
              </Grid>
            );
          })}
          <Grid item xs={6} lg={3}>
            {[0, 1].map((data) => {
              return (
                <Grid
                  className="flex"
                  style={{
                    height: "65px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>Project Manhour</div>
                  <div style={{ fontSize: "28px", color: "#3B873E" }}>400</div>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            item
            lg={12}
            style={{ backgroundColor: "white", margin: "0px 5px 5px 5px" }}
          >
            <Grid sx={{ textAlign: "center" }} xs={12} lg={12}>
              Man hours
            </Grid>
            <Grid item xs={12} lg={8}>
              <div
                style={{
                }}
              >
                <div style={{  }}>
                  <BarChartPage1 heading="Man Hours" />
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="actualProgress">
                <div style={{ fontSize: "14px" }}>Actual Progress</div>
                <div style={{ color: "#3B873E", fontSize: "28px" }}>70%</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*  Page end */}

      {/* table start */}

      <Grid container>
        <Grid item xs={12} lg={5}>
          <Page2Table
            tableKey={page2Key}
            tableData={page2Data}
            heading="Shut Down RedLines"
          />
        </Grid>
        <Grid item xs={12} lg={2}>
          <Page2Table
            tableKey={page2MiddleKey}
            tableData={page2MiddleData}
            heading="Shut Down GO-NO-GO"
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Page2Table
            tableKey={page2Key}
            tableData={page2Data}
            heading="Shut Down Progress"
          />
        </Grid>
      </Grid>

      {/* table end */}
    </>
  );
}

export default ProjectOverview;
