import React from "react";
import { Box, Grid } from "@mui/material";

import graph from "../../assets/img/graph.png";
import fieldMap from "../../assets/img/field-map.png";

import "./index.css";
import GraphCard from "../common/GraphCard";
import { PROJECT } from "../../assets/data/project";

function SecondPage() {
  return (
    <>
      <div>SecondPage</div>

      {/* Carousel start */}
      <Box sx={{display:{xs:"none",lg:"block"}}}>
        <Box sx={{ backgroundColor: "white", margin: "5px" }}>
          <Box sx={{ fontSize: "14px", textAlign: "center", padding: "8px" }}>
            <b>TOP 5 – Save A Life Focus Areas</b>
          </Box>
          <Box sx={{ display: "flex" }}>
            <div
              className="slidebtn"
            >
              {"<"}
            </div>
            <Grid container>
              {PROJECT.slice(0, 5).map((data) => {
                return (
                  <Grid item lg={12 / 5} key={data} className="">
                    <Box
                    className="slideNav"
                      sx={{
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
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            <div
              className="slidebtn"
            >
              {">"}
            </div>
          </Box>
        </Box>
      </Box>
      {/* Carousel end */}

      {/* Page start */}

      <Grid container spacing={1}>
        <Grid item xs={12} lg={5}>
          <Box>
            <GraphCard graph={fieldMap} heading="Man Hours" height="300" />
          </Box>
        </Grid>
        <Grid container item xs={12} lg={7}>
          {[0, 1, 2].map((data) => {
            return (
              <Grid item xs={6} lg={3}>
                <div className="flex" style={{ height: "156px" }}>
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
                    height: "75px",
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
            style={{ backgroundColor: "white", margin: "5px" }}
          >
            <Grid sx={{ textAlign: "center" }} xs={12} lg={12}>
              Header
            </Grid>
            <Grid item xs={12} lg={7}>
              <Box sx={{ padding: "8px" }}>
                <GraphCard
                  graph={graph}
                  // heading='Man Hours'
                  height="120"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
              className="actualProgress"
              >
                <div style={{ fontSize: "14px" }}>Actual Progress</div>
                <div style={{ color: "#3B873E", fontSize: "28px" }}>70%</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*  Page end */}
    </>
  );
}

export default SecondPage;
