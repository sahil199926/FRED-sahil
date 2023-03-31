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
  labels: values.map((e, i) => i),
  datasets: [
    {
      type: "bar",
    //   barThickness: 2,
      label: "Planned Man Hour",
      backgroundColor: "#993b77",
      data: values,
      borderColor: "white",
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
//   tension: 0.4,
  plugins: {
    title: { display: false },
    legend: {
      display: false,
      labels: {
        usePointStyle: true,
        boxWidth: 1,
        font: {
          size: 7,
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
        maxRotation: 0,
        // maxTicksLimit: 4,
        font:{
          size:10
        }
      },
      title: {
        display: true,
        text: "Turnaround Days",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    y: {
      grid: { display: false },
      // barThickness: 1,
      ticks: {
        autoSkip: false,
        min: 0,
        maxRotation: 0,
        stepSize:500,
        font: {
          size: 10,
        },
      },
      title: {
        display: true,
        text: "Number of RFIs/TQs",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
};

export function Page5_VerticalGraph({ heading }) {
  return (
    <Bar type="bar" options={options} data={data} />
  );
}