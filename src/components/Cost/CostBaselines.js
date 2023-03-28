import { Grid } from "@mui/material";
import React from "react";

import budget from "../../assets/img/budget.png";
import forecast from "../../assets/img/forecast.png";
import stage_view from "../../assets/img/stage_view.png";
import CardImgae from "../common/CardImage";
import HeadingWithPara from "../common/HeadingWithPara";

const array = [
  {heading:"Budget",image:budget},
  {heading:"focrecast",image:forecast},
  {heading:"Stage View",image:stage_view},
  {heading:"",image:""}
]

function CostBaselines() {
  return (
    <>
      <HeadingWithPara heading="HP/LP Project — Cost" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
      <div>
        <Grid container >
          {
          array.map((item) => {
            return (
              <Grid item xs={12} sm={6}>
                <div style={{ height: "320px", margin:"5px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",padding:"8px",borderRadius:"8px" }}>
                  <CardImgae
                  image={item.image} heading={item.heading} 
                  />
                </div>
              </Grid>
            );
          })}
          
        </Grid>
      </div>
    </>
  );
}

export default React.memo(CostBaselines);
