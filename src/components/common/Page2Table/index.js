import React from "react";
import './index.css'

const Page2Table = ({ tableKey, tableData, heading }) => {
  // console.log(tableKey,tableData)
  return (
    <div className="table-2" >
        <div className="heading-2">{heading}</div>
      <table>
        <thead>
          <tr className="head-tr">
            {tableKey.map((column) => {
              return (
                <td
                  style={{
                    padding: "6px 2px",
                    fontSize: "10px",
                  }}
                  key={column}
                >
                  <b>{column.lable}</b>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => {
            return (
              <tr
                className="body-tr"
                key={idx}
                style={{
                }}
              >
                {tableKey.map((column) => {
                  return column.key !== "metering" ? (
                    <td
                      style={{
                        padding: "6px",
                      }}
                    >
                      <div
                        style={{
                          padding: "6px",
                          backgroundColor:
                            row[column.key] === "active"
                              ? "#3B873E"
                              : row[column.key] === "cancelled"
                              ? "#F44336"
                              : row[column.key] === "on hold"
                              ? "#26C6DA"
                              : row[column.key] === "execution"
                              ? "#FFEE58"
                              : "#8BC34A",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </td>
                  ) : (
                    <td style={{ padding: "6px", fontSize: "10px" }}>
                      <b>{row[column.key]}</b>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Page2Table;
