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
    12,67,33,16,7,5,4,38,29,17,18,24,9,9  
];

const data = {
  labels: values.map((e, i) => "something"),
  datasets: [
    {
      type: "bar",
    //   barThickness: 2,
      label: "Access",
      backgroundColor: "#78c7ce",
      data: values,
      borderColor: "white",
    },
    {
      type: "bar",
    //   barThickness: 2,
      label: "ADI",
      backgroundColor: "#f2cb8b",
      data: values.map((e)=>e+4),
      borderColor: "white",
    },{
      type: "bar",
    //   barThickness: 2,
      label: "Agree",
      backgroundColor: "#808686",
      data: values.map((e)=>e+2),
      borderColor: "white",
    },
    {
      type: "bar",
    //   barThickness: 2,
      label: "AGI",
      backgroundColor: "blue",
      data: values.map((e)=>e+6),
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
        text:"Actual Headcount by Date and Company", 
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
      stacked:true,
      ticks: {
        display:false,
      },
    },
    y: {
      grid: { display: false },
      stacked:true,
      ticks: {
        autoSkip: false,
        stepSize:500,
        font:{
          size:10
        }
      },
      title: {
        display: true,
        text: "Actual Headcount",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
};

export function Page7_StackBar({ heading }) {
  return (
    <Bar type="bar" options={options} data={data} />
  );
}