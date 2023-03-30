import React from "react";
import "./nav.css";
import profile from "../../../assets/img/bg-image.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const CommonTopbar = ({ handleDrawerToggle, location }) => {
  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="fixed">
      <Toolbar 
      sx={{
        backgroundColor: "#0066B2",
      }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: {
              sm: "none",
              xs:
                location === "/home" || location === "/mainpage"
                  ? "none"
                  : "block",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <IconButton
          onClick={() => navigate('/home')}
            sx={{
              color: "white",
              borderRadius: "50%",
              barder: "1px solid white",
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography>PROJECT INSIGHTS</Typography>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          TCO FRED Framework
        </Typography>

        <Box
          sx={{
            gap: "10px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            Welcome, Alisher Sailaubay
          </Typography>{" "}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CommonTopbar;
