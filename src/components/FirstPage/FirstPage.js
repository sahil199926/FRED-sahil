import { Grid } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BUDGET_CHART_DATA,
  BUDGET_CHART_OPTION,
} from "../../assets/data/project";
import Filters from "../common/Filters";
import PriseShowCard from "../common/PriseShowCard";
export default function FirstPage() {
  return (
    <div>
      <Filters />

      {/* Edit by gyan */}
      <Grid container spacing={2}>
        <Grid item xs={2} lg={2}>
          Safety
        </Grid>
        <Grid item xs={4}>
          Budget
        </Grid>
        <Grid item xs={6} lg={2}>
          Progress
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid container item xs={12} lg={2}>
          <Grid item xs={4} lg={12}>
            <PriseShowCard
            heading="Fatalities"
            value="0"
            currency="$"
            subHeading="One TCO 2022 Target"

            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <h3>Fatalities</h3>
            <div>0</div>
            <div>One TCO 2022 Target</div>
          </Grid>
          <Grid item xs={4} lg={12}>
            <h3>Fatalities</h3>
            <div>0</div>
            <div>One TCO 2022 Target</div>
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={6}>
          <Grid item xs={6}>
            <h3>Fatalities</h3>
            <div>0</div>
            <div>One TCO 2022 Target</div>
          </Grid>
          <Grid item xs={6}>
            <h3>Fatalities</h3>
            <div>0</div>
            <div>One TCO 2022 Target</div>
          </Grid>
          <Grid item xs={12}>
            {/* <div className="">Annual Outlook vs Budget</div> */}
            <Bar options={BUDGET_CHART_OPTION} data={BUDGET_CHART_DATA} />
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={2}>
          <Grid item xs={4} lg={12}>
            <h3>Fatalities</h3>
            <div>0</div>
            <div>One TCO 2022 Target</div>
          </Grid>
          <Grid item xs={4} lg={12}>
            <h3>Fatalities</h3>
            <div>0</div>
            <div>One TCO 2022 Target</div>
          </Grid>
          <Grid item xs={4} lg={12}>
            <h3>Fatalities</h3>
            <div>0</div>
            <div>One TCO 2022 Target</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
