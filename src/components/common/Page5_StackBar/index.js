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

const labels = ["14 Jun 2021", "28 Jun 2021", "12 Jul 2021","26 Jul 2021","9 JAug 2021"];

// const values = [
//   1, 1, 2, 2, 2.3, 2.5, 2.7, 2.8, 2.9, 3, 3, 4, 4.4, 4.5, 4.6, 4.8, 4.8, 2, 2.1,
//   2.2, 2.5, 3, 4, 5, 8, 8, 7, 5, 7, 6, 8, 4, 5, 4, 3, 3, 3.1, 2.9, 2.6, 2,
//   1, 0, 0, 0, 1, 6, 7, 4, 3, 3.5, 5.5, 6, 5.4, 5, 7, 3, 0, 2, 3, 5, 2, 2, 1,
// ];


const values = 
  {
    submitted:[41,56,51,38,69],
    resolved:[86,61,46,87,89],
    closed:[81,57,38,29,56,],
    overlap:[81,57,38,29,56,],
    unresolved:[40,43,45,42,40],
    constrained:[60,61,59,57,65],
    all:[200,201,205,201,208]
  }


const data = {
  labels,
  datasets: [
    {
      type: "bar",
      label: "Submitted",
      backgroundColor: "#d56643",
      data: values.resolved,//slice(0,25).map((e) => e + Math.round(Math.random() * 1)),
      borderColor: "#d56643",
      stack:"Stack 0",
      // order:1
    },
    {
      type: "bar",
      // barThickness: 8,
      label: "Resolve",
      backgroundColor: "rgba(236,235,232,.4)",
      data: values.overlap,
      borderColor: "white",
      stack:"Stack 1",
      // order:2,
      yAxisID:"percentage",
      categoryPercentage:2
    },
    {
      type: "bar",
      label: "Closed",
      backgroundColor: "#99a966",
      data: values.closed,
      borderColor: "#99a966",
      stack:"Stack 1",
      // order:1
    },
    {
      type: "bar",
      // barThickness: 8,
      label: "Unresolved",
      backgroundColor: "#67ae5d",
      data: values.submitted,
      borderColor: "white",
      stack:"Stack 2",
      // order:1
    },
    {
      type: "line",
      label: "Unresolved",
      backgroundColor: "#dab051",
      data: values.unresolved,
      borderColor: "#dab051",
    },
    {
      type: "line",
      pointRadius: 0,
      label: "Constrained",
      backgroundColor: "#202c64",
      data: values.constrained,
      borderColor: "#202c64",
    },
    {
      type: "line",
      pointRadius: 0,
      label: "All open",
      backgroundColor: "#693354",
      data: values.all,
      borderColor: "#693354",
      order:2
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
    tooltip: { enabled: true },
    datalabels: {
      display: true,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      // barThickness: 1,
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        font:{
          size:10
        }
      },
    },
    y: {
      grid: { display: false },
      // barThickness: 1,
      ticks: {
        autoSkip: false,
        min: 0,
        stepSize: 100,
        maxRotation: 0,
        font: {
          size: 10,
        },
      },
    },
    percentage:{
      position:"right",
      ticks: {
        autoSkip: true,
        min: 0,
        // stepSize: 100,
        maxRotation: 0,
        font: {
          size: 10,
        },
      }
    }
  },
};

export function Page5_StackBar() {
  return (
    <Bar type="bar" options={options} data={data} />
  );
}