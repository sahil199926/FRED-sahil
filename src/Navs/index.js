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
import Topbar from "../components/common/Topbar";
import FirstPage from "../components/FirstPage/FirstPage";
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
        {/* <Footer /> */}
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
          <Route path="/firstpage" exact element={<FirstPage />} />

          <Route path="*" element={<Navigate to="/home" />} />
          <Route element={<SidebarHoc />}>
            <Route path="/overview" exact element={<ProjectOverview />} />
            <Route path='/cost/cost-baselines' exact element={<CostBaselines/>} />
            <Route path='/fourthpage' exact element={<FourthPage/>} />
            <Route path='/fifthpage' exact element={<FifthPage/>} />
            <Route path='/sixthpage' exact element={<SixthPage/>} />
            <Route path='/seventhpage' exact element={<SeventhPage/>} />
            <Route path='/eighthpage' exact element={<EighthPage/>} />
            <Route path='/ninthpage' exact element={<NinthPage/>} />
            <Route path='/tenthpage' exact element={<TenthPage/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navs;
