import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../Page/Home";
import Topbar from "../components/common/CommonTopbar";
import Mainpage from "../components/Mainpage";
import ProjectOverview from "../components/ProjectOverview";
import CostBaselines from "../components/Cost/CostBaselines";
import FourthPage from "../components/FourthPage";
import FifthPage from "../components/FifthPage";
import SixthPage from "../components/SixthPage";
import SeventhPage from "../components/SeventhPage";
import EighthPage from "../components/EighthPage";
import NinthPage from "../components/NinthPage";
import TenthPage from "../components/TenthPage";
import Sidebar from "../components/Sidebar";

function Navs() {
  const Hoc = () => {
    const location = useLocation();
    return (
      <>
       {(location.pathname === "/home" ||
          location.pathname === "/mainpage") && <Topbar location={} />}
        
        <div
          style={{
            padding:
              location.pathname === "/home" || location.pathname === "/"
                ? "0px"
                : "10px",
          }}
        >
          <Outlet />
        </div>
        {(location.pathname === "/home" ||
          location.pathname === "/mainpage") && <Footer />}
      </>
    );
  };
  const SidebarHoc = () => {
    return (
      <Sidebar>
        <Outlet />
      </Sidebar>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Hoc />}>
          <Route path="/home" exact element={<Home />} />
          <Route path="/mainpage" exact element={<Mainpage />} />

          <Route path="*" element={<Navigate to="/home" />} />
          <Route element={<SidebarHoc />}>
            <Route path="/overview" exact element={<ProjectOverview />} />
            <Route
              path="/cost/cost-baselines"
              exact
              element={<CostBaselines />}
            />
        
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navs;
