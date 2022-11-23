import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Nav.css"
import Navbar from "./Navbar";
import Header from "../header";
import Dashboard from "../dashboard";
import Checkin from "../checkin";
import Checkout from "../checkout";
import Home from "../main";
import Account from "../account";

function Nav() {
    return(
    <>
        <div className="wrapper">
          <Router>
              <div className="flex-item">
                <Navbar />
              </div>
              <div className="flex-item-content">
                <div className="header-content">
                  <Header />
                </div>
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/checkin" element={<Checkin />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/account" element={<Account />} />
                  </Routes>
                </div>
              </div>
          </Router>
        </div>
    </>
    )
}

export default Nav;