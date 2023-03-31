import { Grid, Box } from "@mui/material";
import React from "react";
// import { Bar } from "react-chartjs-2";
import transition from "../../assets/img/transition.png"
import document from "../../assets/img/document.png"

import './index.css'
import CardImgae from "../common/CardImage";
import HeadingWithPara from "../common/HeadingWithPara";
import { HorizontalChart } from "../common/HorizontalChart";
import { Table_Horizontal } from "../common/Table_Horizontal";

const data = [
  {heading:"Total tag count",amount:1042487},
  {heading:"Total tag count for measuring completeness",amount:1042030},
  {heading:"% Complete",amount:95.96},
]

const table = [
  {
    hd:"Total Scope",
    bd:"2468706"
  },{
    hd:"Already Closed",
    bd:"23650283"
  },{
    hd:"Still to go",
    bd:"1058671"
  },{
    hd:"Complete (%)",
    bd:"95.82"
  },{
    hd:"Forecast 6 Month",
    bd:"984880"
  },
]

const hoc = (data) => {
  return (
    <Grid item xs={12} sm={6}>
      <div
      className="page-4"
      >
        {data}
      </div>
    </Grid>
  );
};

function FourthPage() {
  return (
    <>
      <HeadingWithPara heading="HP/LP Project — Information Management" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
      <Grid container>
        {hoc(
          <div>
            <div style={{textAlign:"center",color:"rgb(0,102,178",fontSize:"16px"}}><b>Documents</b></div>
            <div style={{display:"flex"}}>
              <div className="document-card">
                <div style={{color:"rgb(0,102,178"}}>1.36M</div>
                <div style={{fontSize:"10px"}}>Documents</div>
              </div>
              <div className="document-card">
                <div style={{color:"rgb(0,102,178"}}>274.40K</div>
                <div style={{fontSize:"10px"}}>Redlines Received</div>
              </div>
            </div>
            <div style={{height:"180px"}}>
              <HorizontalChart/>
            </div>
          </div>
        )}
        {hoc(
          <div className="flex-4" style={{justifyContent:"space-between",}}>
              <div style={{color:"#0066B2",fontSize:"16px"}}><b>Data</b></div>
              <div className="data-flex" style={{}}>
                {
                  data.map((item)=>{
                    return <div style={{textAlign:"center",width:"250px"}}>
                      <div style={{backgroundColor:"#42628d",color:"#fff",fontSize:"16px"}}>{item.heading}</div>
                      <div style={{fontSize:"14px", marginTop:"5px"}}>{item.amount}{item.heading==="% Complete" ? " %":""}</div>
                    </div>
                  })
                }
              </div>
          </div>
        )}
        {hoc(
          <div style={{width:"100%"}}>
            <div style={{textAlign:"center",color:"rgb(0,102,178",fontSize:"16px"}}><b>Documents</b></div>
            <Box sx={{border:"1px solid gray",fontSize:{xs:"10px",lg:"12px"},width:"100%"}}>
              <table>
                <thead>
                  <tr>
                    {
                      table.map((data)=><td>{data.hd}</td>)
                    }
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {
                      table.map((data)=><td><b>{data.bd.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</b></td>)
                    }
                  </tr>
                </tbody>
              </table>
            </Box>
            <div style={{textAlign:"center",backgroundColor:"rgb(66, 98, 141)",color:"white"}}>Assest Data Completeness</div>
            <div style={{height:"140px", border:"1px solid gray"}}>
              <Table_Horizontal/>
            </div>
          </div>
        )}
        {hoc(
          <div className="flex-4" style={{}}>
              <div style={{color:"#0066B2",fontSize:"16px"}}><b>Close Out</b></div>
              <div className="close-out" style={{}}>
                <div className="first">
                  <div>Purchage Order</div>
                  <div style={{color:"#6b8392"}}>647</div>
                </div>
                <div className="second">
                  <div>
                    <div>Documents</div>
                    <div style={{color:"#6b8392"}}>647 K</div>
                  </div>
                  <div>
                    <div>% Complete Docs</div>
                    <div style={{color:"#6b8392"}}>98.94 %</div>
                  </div>
                </div>
                <div className="third">
                  <div>
                    <div>Registered Tags</div>
                    <div style={{color:"#6b8392"}}>503.62 K</div>
                  </div>
                  <div>
                    <div>% Complete Tags</div>
                    <div style={{color:"#6b8392"}}>92.42 %</div>
                  </div>
                </div>
                
              </div>
          </div>
        )}
      </Grid>
    </>
  );
}

export default FourthPage;
