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

// const labels = ["January 2023", "July 2023", "January 2024", "July 2024"];

const values = [
    1242,1467,1233,1116,779,677,478,338,229,179,118,124,89,90  
];

const data = {
  labels: values.map((e, i) => "something"),
  datasets: [
    {
      type: "bar",
    //   barThickness: 2,
      label: "Planned Headcount",
      backgroundColor: "#f0d581",
      data: values,
      borderColor: "white",
    },
    {
      type: "bar",
    //   barThickness: 2,
      label: "Actual Headcount",
      backgroundColor: "#7a9270",
      data: values.map((e)=>e-40),
      borderColor: "white",
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
//   tension: 0.4,
  
  plugins: {
    title:{
        display:true,
        text:"Daily Headcount Comparision", 
      },
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        font: {
          size: 8,
        },
      },
    },
    tooltip: { enabled: true },
    datalabels: {
      display: false,
      align:"top"
    },
  },
  scales: {
    x: {
      grid: { display: false },
      // barThickness: 1,
      ticks: {
        autoSkip: true,
        minRotation: 90,
        maxRotation:90,
        // maxTicksLimit: 4,
        font:{
          size:10
        }
      },
    },
    y: {
      grid: { display: false },
      display:false
    },
  },
};

export function Page7_VerticalGraph({ heading }) {
  return (
    <Bar type="bar" options={options} data={data} />
  );
}