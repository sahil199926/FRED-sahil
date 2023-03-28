import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { option } from "./SidebarOptions";
import Footer from "../Footer";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const drawerWidth = 240;

function Sidebar({ window, children }) {
  const [options, setOptions] = React.useState(option);
  const [itsAChild, setItsAChild] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState("");
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const redirect = (option) => {
    if (option.navigateTo) {
      navigate(option.navigateTo);
    } else if (option.path) {
      navigate(option.path);
    }
    setMobileOpen(false);
  };
  useEffect(() => {
    let paths = location.pathname.split("/");
    if (paths.length === 3) {
      let path = `/${paths[1]}`;
      let option = options.find((option) => option.path === path);
      if (option) {
        let childNav = option.children;
        if (childNav) {
          setOptions(childNav);
          setItsAChild(true);
        }
      }
    } else if (paths.length === 2) {
      setItsAChild(false);
      setOptions(option);
    }
  }, [location]);

  const drawer = (
    <div
    >
      <Toolbar />
      <Divider />
      <List 
      sx={{

          padding: "5px !important",
      
      }}
      >
        {itsAChild && (
          <ListItem
            sx={{
              cursor: "pointer",
              backgroundColor:
                location.pathname === "/overview" ? "#0066b229" : "white",
            }}
            onClick={() => redirect({ name: "Overview", path: "/overview" })}
            key={option.name}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <ArrowBackIosRoundedIcon />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "18px",
                }}
                primary={"Overview"}
              />
            </ListItemButton>
          </ListItem>
        )}
        {options.map((option, index) => (
          <ListItem
            sx={{
              cursor: "pointer",
              backgroundColor: location.pathname === option.path ? `#0066b229` : "white",

                borderRadius: location.pathname === option.path ? "8px" : "0px",
            }}
            onClick={() => redirect(option)}
            key={option.name}
            disablePadding
          >
            <ListItemButton>
              {option.icon && (
                <ListItemIcon>
                  <img src={option.icon} alt={option.name} />
                </ListItemIcon>
              )}
              <ListItemText
                sx={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "18px",
                }}
                primary={option.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: 1 }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            zIndex: 5,
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              zIndex: -1,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
          padding: { xs: "0px", sm: "24px" },
        }}
      >
        <Toolbar />
        {children}
        <Footer />
      </Box>
    </Box>
  );
}

// Sidebar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
//   childern: PropTypes.node,
// };

export default React.memo(Sidebar);
