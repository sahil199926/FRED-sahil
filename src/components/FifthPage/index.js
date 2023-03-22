import { Grid } from "@mui/material";
import React from "react";
import page4_1 from "../../assets/img/page4_1.png";
import page4_2 from "../../assets/img/page4_2.png";
import page4_4 from "../../assets/img/page4_4.png";

import CardImage from "../common/CardImage";
import HeadingWithPara from "../common/HeadingWithPara";

const array = [
  {heading:"",image:page4_1},
  {heading:"",image:page4_2},
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
