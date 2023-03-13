import React from "react";
import {
  BrowserRouter , 
  Routes,
  Route,
  Link,
  Navigate,
  Outlet
} from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../Page/Home";
import Topbar from '../components/common/Topbar'
import FirstPage from "../components/FirstPage/FirstPage";
function Navs() {
  const Hoc=()=>{
    return(
      <>
      <Topbar/>
      <Outlet/>
      <Footer />
      </>
    )
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Hoc/>}>
      <Route path="/home" exact element={<Home />} />
      <Route path="/firstpage" exact element={<FirstPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default Navs;
