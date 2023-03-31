// import { Chart } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ["PCP","MMM","SSS","III","QQQ","HHH","LLP","LLL","JJJ","PPP"];

const values = 
  {
    green:[19,223,301,197,345,321,1,972,1183,2149],
    red:[225,43,23,197,62,133,563,53,462,513]
  }
;

const data = {
  labels:labels.reverse(),
  datasets: [
    {
      type: "bar",
    //   barThickness: 4,
      label: "Planned Man Hour",
      backgroundColor: "red",
      data: values.red.reverse(),
      borderColor: "white",
    },{
      type: "bar",
    //   barThickness: 4,
      label: "Planned Man Hour",
      backgroundColor: "green",
      data: values.green.reverse(),
      borderColor: "white",
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis:'y',
  plugins: {
    title: { display: false },
    legend: {

      display: false,
    },
    tooltip: { enabled: false },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      // barThickness: 1,
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        // maxTicksLimit: 4,
        font:{
          size:10
        }
      },
    },
    y: {
      grid: { display: false },
      autoSkip: false,
        stepSize: 1000,
        maxRotation: 0,
    },
  },
};

export function Table_Horizontal() {
  return (
    <Bar type="bar" options={options} data={data} />
  );
}