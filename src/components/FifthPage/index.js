import { Grid } from "@mui/material";
import React from "react";
import page4_1 from "../../assets/img/page4_1.png";
import page4_2 from "../../assets/img/page4_2.png";
import page4_4 from "../../assets/img/page4_4.png";

import CardImage from "../common/CardImage";
import HeadingWithPara from "../common/HeadingWithPara";
import { Page5_StackBar } from "../common/Page5_StackBar";
import { Page5_VerticalGraph } from "../common/Page5_VerticalGraph";

const array = [
  // {heading:"",image:page4_1},
  // {heading:"",image:page4_2},s
  {heading:"",image:""},
  {heading:"",image:page4_4},
]

function FifthPage() {
  return (
    <>
      <HeadingWithPara heading="HP/LP Project — Engineering" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
      <div>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                height: "320px",
                margin: "5px",
                display: "flex",                flexDirection:"column",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "8px",
                borderRadius: "8px",
              }}
            >
              <div style={{marginTop:"15px",backgroundColor:"#41597e",color:"white",width:"90%",textAlign:"center"}}>SDQ counts per bi-weekly update</div>

               <div style={{border:"1px solid #41597e",height:"250px",width:"90%"}}><Page5_StackBar /></div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                height: "320px",
                margin: "5px",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "8px",
                borderRadius: "8px",
              }}
            >
              <div style={{margin:"15px 0px",backgroundColor:"#41597e",color:"white",width:"100%",textAlign:"center"}}>Number of Responeded RFIs/TQs by Turnarond Days</div>
               <div style={{height:"250px",width:"90%"}}><Page5_VerticalGraph /></div>
            </div>
          </Grid>
          {array.map((item) => {
            return (
              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    height: "320px",
                    margin: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    padding: "8px",
                    borderRadius: "8px",
                  }}
                >
                  <CardImage image={item.image} heading={item.heading} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default FifthPage;
