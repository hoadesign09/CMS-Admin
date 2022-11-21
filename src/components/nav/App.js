import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from "../dashboard";
import Checkin from "../checkin";
import Checkout from "../checkout";
import Header from "../header";
import Navbar from "./Navbar";

function Nav() {
    return(
    <Router>
      <Header/>
      <Navbar />
      <Routes>
        <Route path='/dashboard' exact element={<Dashboard/>} />
        <Route path='/checkin' element={<Checkin/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </Router>
    )
}

export default Nav;