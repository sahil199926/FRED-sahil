import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BUDGET_CHART_DATA,
  BUDGET_CHART_OPTION,
} from "../../../assets/data/project";

const BarChart = ({bgColor}) => {
  return (
    // <div className="col-12">
      <div className="tile chart-tile budget-chart">
        <span className="title-subtile">Annual Outlook vs Budget</span>
        <Bar options={BUDGET_CHART_OPTION(bgColor)} data={BUDGET_CHART_DATA} />
      </div>
    // </div>
  );
};

export default BarChart;
