import { Box, Grid } from "@mui/material";
import React from "react";

import page7_1 from "../../assets/img/page7_1.png";
import page7_2 from "../../assets/img/page7_2.png";
import page7_3 from "../../assets/img/page7_3.png";
import page7_4 from "../../assets/img/page7_4.png";
import page7_5 from "../../assets/img/page7_5.png";
import HeadingWithPara from "../common/HeadingWithPara";

function SeventhPage() {
  const HOC = ({media,height,image})=>{
    return <Grid item xs={12} sm={media}>
    <Box
      sx={{ backgroundColor: "#fff", margin: "5px", height: height+"px", padding:"8px",display:"flex",alignItems:"center",justifyContent:"center" }}
    >
      <img src={image} alt="" height="220px" style={{width: "-webkit-fill-available",margin:"auto"}} />
    </Box>
  </Grid>
  }
  return (
    <>
      <HeadingWithPara heading="HP/LP Project — Resourcing" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
      <div>
        <Grid container>
          {
            [page7_1,page7_2,page7_3].map((item)=>{
              return <HOC media={4} height="320" image={item} key={item.toString()}  />
            })
          }
          {
            [page7_4,page7_5].map((item)=>{
              return <HOC media={6} height="300" image={item} key={item.toString()}  />
            })
          }
          {/* <Grid item xs={12} sm={4}>
            <Box
              sx={{ backgroundColor: "#fff", margin: "5px", height: "320px", padding:"8px",display:"flex",alignItems:"center",justifyContent:"center" }}
            >
              <img src={page7_1} alt="" height="220px" style={{width: "-webkit-fill-available",margin:"auto"}} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ backgroundColor: "#fff", margin: "5px", height: "320px", padding:"8px",display:"flex",alignItems:"center",justifyContent:"center" }}
            >
              <img src={page7_2} alt="" height="220px" style={{width: "-webkit-fill-available",margin:"auto"}} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ backgroundColor: "#fff", margin: "5px", height: "320px", padding:"8px",display:"flex",alignItems:"center",justifyContent:"center" }}
            >
              <img src={page7_3} alt="" height="220px" style={{width: "-webkit-fill-available",margin:"auto"}} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{ backgroundColor: "#fff", margin: "5px", height: "300px", padding:"8px",display:"flex",alignItems:"center",justifyContent:"center" }}
            >
              <img src={page7_4} alt="" height="220px" style={{width: "-webkit-fill-available",margin:"auto"}} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{ backgroundColor: "#fff", margin: "5px", height: "300px", padding:"8px",display:"flex",alignItems:"center",justifyContent:"center" }}
            >
              <img src={page7_5} alt="" height="220px" style={{width: "-webkit-fill-available",margin:"auto"}} />
            </Box>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
}

export default SeventhPage;
