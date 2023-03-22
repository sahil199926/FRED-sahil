import { Grid } from "@mui/material";
import React from "react";
// import { Bar } from "react-chartjs-2";
import transition from "../../assets/img/transition.png"
import document from "../../assets/img/document.png"

import './index.css'
import CardImgae from "../common/CardImage";
import HeadingWithPara from "../common/HeadingWithPara";

const data = [
  {heading:"Total tag count",amount:1042487},
  {heading:"Total tag count for measuring completeness",amount:1042030},
  {heading:"% Complete",amount:95.96},
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
        {hoc(<CardImgae image={document} heading="Document" />)}
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
        {hoc(<CardImgae image={transition} heading="Transition" />)}
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
