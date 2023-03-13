import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/Home";
import Nav from "./components/Nav";
import theme from "./theme";
import CustomeThemeprovider from "./customeThemeprovider";
import FirstPage from "./components/FirstPage/FirstPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <CustomeThemeprovider theme={theme}>
        <Router>
          <div className="app-container">
            <div className="subcontianer">
              <Nav />
              <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route path="/firstpage" exact element={<FirstPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>

              <Footer />
            </div>
          </div>
        </Router>
      </CustomeThemeprovider>
    </ErrorBoundary>
  );
}

export default App;
