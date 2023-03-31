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

const labels = ["January 2023", "July 2023", "January 2024", "July 2024"];

const values = [
  1, 1, 2, 2, 2.3, 2.5, 2.7, 2.8, 2.9, 3, 3, 4, 4.4, 4.5, 4.6, 4.8, 4.8, 2, 2.1,
  2.2, 2.5, 3, 4, 5, 8, 8, 7, 5, 7, 6, 8, 4, 5, 4, 3, 3, 3.1, 2.9, 2.6, 2,
  1, 0, 0, 0, 1, 6, 7, 4, 3, 3.5, 5.5, 6, 5.4, 5, 7, 3, 0, 2, 3, 5, 2, 2, 1,
];

const data = {
  labels: values.map((e, i) => labels[i % 4]),
  datasets: [
    {
      type: "bar",
      barThickness: 2,
      label: "Planned Man Hour",
      backgroundColor: "#67ae5d",
      data: values,
      borderColor: "white",
    },
    {
      type: "bar",
      barThickness: 2,
      label: "Actual Man Hour",
      backgroundColor: "#d56643",
      data: values.slice(0,25).map((e) => e + Math.round(Math.random() * 1)),
      borderColor: "white",
    },
    {
      type: "line",
      pointRadius: 0,
      label: "Actual Progress",
      backgroundColor: "#3184ea",
      data: values.slice(0,25).map((e) => e + 2),
      borderColor: "#3184ea",
    },
    {
      type: "line",
      pointRadius: 0,
      label: "Forecast Progress",
      backgroundColor: "#5c50aa",
      data: values.map((e) => e + 1.5),
      borderColor: "#5c50aa",
    },
    {
      type: "line",
      pointRadius: 0,
      label: "Planned Progress",
      backgroundColor: "#c84e92",
      data: values.map((e) => e + 1),
      borderColor: "#c84e92",
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
        maxTicksLimit: 4,
        font:{
          size:10
        }
      },
      title: {
        display: true,
        text: "Date",
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
        // max: 50,
        stepSize: 5,
        maxRotation: 0,
        font: {
          size: 10,
        },
        callback: function (v) {
          return this.getLabelForValue(v) + "K";
        },
      },
      title: {
        display: true,
        text: "Man Hours",
        font: {
          size: 14,
          weight: "bold",
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
          return (v / this.max) * 100 + "%";
        },
      },
    },
  },
};

export function BarChartPage1({ heading }) {
  return (
    <Bar type="bar" options={options} data={data} />
  );
}