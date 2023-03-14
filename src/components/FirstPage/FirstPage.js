import { Box, Grid } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BUDGET_CHART_DATA,
  BUDGET_CHART_OPTION,
} from "../../assets/data/project";
import BarCard from "../common/BarCard";
import BarChart from "../common/BarChart";
import Filters from "../common/Filters";
import GraphCard from "../common/GraphCard";
import PriseShowCard from "../common/PriseShowCard";

import './index.css'

export default function FirstPage() {
  return (
    <div>
      <Filters />

      {/* Edit by gyan */}
      <div className="upperbar" style={{}}>
        <Box sx={{width:{xs:"100%",lg:"16.68%"}}}>
          Safety
        </Box>
        <Box sx={{width:{xs:"100%",lg:"58.34%"}}}>
          Budget
        </Box>
        <Box sx={{width:{xs:"100%",lg:"16%"}}}>
          Progress
        </Box>
      </div>
      <Grid container spacing={1}>
        <Grid container item xs={12} lg={2} spacing={1}>
          {[0, 1, 2].map((data) => {
            return <Grid item xs={4} lg={12} key={data}>
              <PriseShowCard
                heading="Fatalities"
                value="0"
                currency="$"
                subHeading="One TCO 2022 Target"
              />
            </Grid>;
          })}
        </Grid>
        <Grid container item xs={12} lg={5}>
          {
            [0,1].map((data)=>{
              return <Grid item xs={6}>
                <BarCard 
                heading="budget"
                currency="$"
                value="200M"
                />
              </Grid>
            })
          }
          <Grid item xs={12} lg={12}>
            {/* <div className="">Annual Outlook vs Budget</div> */}
            <BarChart />
            {/* <Bar options={BUDGET_CHART_OPTION} data={BUDGET_CHART_DATA} /> */}
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={2} spacing={1}>
          {
            [0,1,2].map((data)=>{
              return<Grid item xs={4} lg={12} key={data}>
              <PriseShowCard
                heading="Hours"
                value="10K"
                currency=""
                subHeading=""
              />
            </Grid>;
            })
          }
        </Grid>
        <Grid item xs={12} lg={3} >
          <GraphCard />
        </Grid>
      </Grid>
    </div>
  );
}
