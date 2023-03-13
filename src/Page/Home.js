import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BUDGET_CHART_DATA,
  BUDGET_CHART_OPTION,
  PROJECT,
  WORK_CHART_DATA,
  WORK_CHART_OPTIONS,
} from "../assets/data/project";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="row">
        <div className="project-table-col col-lg-5">
          <div className="title-block">
            <h1>TCO FRED Framework</h1>
            <h4>Facilities Reliable Execution Delivery</h4>
          </div>
          <div className="project-block">
            <h4>List of Active Projects</h4>
            <table className="project-table">
              <thead>
                <tr>
                  <td>Project #</td>
                  <td>Project Title</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {PROJECT.map((project, idx) => (
                  <tr key={idx}>
                    <td>{project.id}</td>
                    <td title={project.title}>{project.title}</td>
                    <td
                      className={[
                        "project-status",
                        project.status.toLowerCase().replace(" ", "-"),
                      ].join(" ")}
                    >
                      {project.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="portfolio-col col-lg-7">
          <h4>Overview of project portfolio</h4>
          <div className="row g-2">
            <div className="col-lg-6 col-xl-4">
              <div className="row g-2">
                <div className="col-6">
                  <div className="tile ">
                    <span className="tile-title">Total Portfolio</span>
                    <span className="tile-digits">160</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="tile ">
                    <span className="tile-title">Not Started Projects</span>
                    <span className="tile-digits">13</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="tile chart-tile work-chart">
                    <span className="title-subtile">Phase of work</span>
                    <Bar options={WORK_CHART_OPTIONS} data={WORK_CHART_DATA} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-8">
              <div className="row g-2">
                <div className="col-6 col-sm-3 col-lg-6 col-xl-3">
                  <div className="tile">
                    <span className="tile-title">Portfolio YTD Spend</span>
                    <span className="tile-digits">$179.73M</span>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-lg-6 col-xl-3">
                  <div className="tile">
                    <span className="tile-title">Annual Outlook</span>
                    <span className="tile-digits">$177.67M</span>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-lg-6 col-xl-3">
                  <div className="tile">
                    <span className="tile-title">Annual Budget</span>
                    <span className="tile-digits">$236.66M</span>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-lg-6 col-xl-3">
                  <div className="tile">
                    <span className="tile-title">Total Project Estimate</span>
                    <span className="tile-digits">$2.029.8M</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="tile chart-tile budget-chart">
                    <span className="title-subtile">
                      Annual Outlook vs Budget
                    </span>
                    <Bar
                      options={BUDGET_CHART_OPTION}
                      data={BUDGET_CHART_DATA}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-block">
            <button className="project-button">
              Projects Insights <i className="bi bi-arrow-right"></i>
            </button>
            <button className="project-button">
              Start A project <i className="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
