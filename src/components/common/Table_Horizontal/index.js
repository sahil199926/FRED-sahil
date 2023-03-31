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

const labels = ["Apr 2022", "Jul 2022", "Oct 2022",];

// const values = [
//   1, 1, 2, 2, 2.3, 2.5, 2.7, 2.8, 2.9, 3, 3, 4, 4.4, 4.5, 4.6, 4.8, 4.8, 2, 2.1,
//   2.2, 2.5, 3, 4, 5, 8, 8, 7, 5, 7, 6, 8, 4, 5, 4, 3, 3, 3.1, 2.9, 2.6, 2,
//   1, 0, 0, 0, 1, 6, 7, 4, 3, 3.5, 5.5, 6, 5.4, 5, 7, 3, 0, 2, 3, 5, 2, 2, 1,
// ];


const values = 
  {
    actual:[172,197,49,211],
    planned:[7,54,69,176,150,132,176,128,90,78,132,102],
    forecast:[0,0,0,0,56,132,170,111,80,60,100,80]
  }


const data = {
  labels: values.planned.map((e, i) => labels[i % 3]),
  datasets: [
    {
      type: "bar",
      barThickness: 4,
      label: "Planned Man Hour",
      backgroundColor: "#67ae5d",
      data: values.actual,
      borderColor: "white",
    },
    {
      type: "bar",
      barThickness: 4,
      label: "Actual Man Hour",
      backgroundColor: "#d56643",
      data: values.planned,//slice(0,25).map((e) => e + Math.round(Math.random() * 1)),
      borderColor: "white",
    },
    {
      type: "bar",
      pointRadius: 0,
      label: "Forecast Progress",
      backgroundColor: "#5c50aa",
      data: values.forecast,
      borderColor: "#5c50aa",
    },
    {
      type: "line",
      pointRadius: 0,
      label: "Actual Progress",
      backgroundColor: "#67ae5d",
      data: values.actual,
      borderColor: "#67ae5d",
    },
    {
      type: "line",
      pointRadius: 0,
      label: "Forecast Progress",
      backgroundColor: "#5c50aa",
      data: values.actual.concat(values.forecast.slice(4)),
      borderColor: "#5c50aa",
    },
    {
      type: "line",
      pointRadius: 0,
      label: "Planned Progress",
      backgroundColor: "#d56643",
      data: values.planned,
      borderColor: "#d56643",
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.4,
  plugins: {
    title: { display: false },
    legend: {
      display: true,
      position:"bottom",
      labels: {
        usePointStyle: true,
        boxWidth: 1,
        font: {
          size: 7,
        },
      },
    },
    tooltip: { enabled: false },
    datalabels: {
      display: true,
      textAlign:"right",
      color:"white"
    },
  },
  scales: {
    x: {
      grid: { display: false },
      // barThickness: 1,
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        maxTicksLimit: 3,
        font:{
          size:10
        }
      },
    },
    y: {
      grid: { display: false },
      // barThickness: 1,
      ticks: {
        autoSkip: true,
        min: 0,
        // max: 50,
        // stepSize: 5,
        maxRotation: 0,
        font: {
          size: 10,
        },
        callback: function (v) {
          return this.getLabelForValue(v) + "K";
        },
      },
    },
    y1: {
      grid: { display: false },
      position: "right",
      ticks: {
        autoSkip: true,
        min: 0,
        maxRotation: 0,
        font: { weight: "bold" },
        callback: function (v, index) {
          return (2*v) + "M";
        },
      },
    },
  },
};

export function Table_Horizontal() {
  return (
    <Bar type="bar" options={options} data={data} />
  );
}