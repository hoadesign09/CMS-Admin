import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popup from "reactjs-popup";
import "./Nav.css"
import Navbar from "./Navbar";
import Header from "../header";
import Dashboard from "../dashboard";
import UserPage from "../userPage";
import AdminPage from "../adminPage";
import Home from "../main";
import Account from "../account";

function Nav() {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = (e) => {
    setShowMenu(!showMenu);
  };
    return(
    <>
        <Popup>
            <div>Popup content here !!</div>
        </Popup>
        <div className="wrapper">
          <Router>
              <div className={`items ${showMenu ? "hidden" : ""}`}>
                  <Navbar />
              </div>
              <div className="flex-item-content">
                <div className="header-content">
                  <div className="menu-icon">
                    <button className="hamburger" onClick={handleClick}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="black"
                          >
                        <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="header">
                    <Header/>
                  </div>
                </div>
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/user-page" element={<UserPage />} />
                    <Route path="/admin-page" element={<AdminPage />} />
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