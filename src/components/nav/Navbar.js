import React from 'react';
import { NavLink as Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
        <Link to='/dashboard' activeStyle>
            Dashboard
        </Link>
        <Link to='/checkin' activeStyle>
            Check In
        </Link>
        <Link to='/checkout' activeStyle>
            Check Out
        </Link>

        </>
    );
};

export default Navbar;
