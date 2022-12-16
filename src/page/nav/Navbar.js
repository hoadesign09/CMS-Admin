import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className='nav-menu'>
                <div className='menu'>
                    <Link to="/" className="navlink" activeStyle>
                        Home
                    </Link>
                    <Link to='/dashboard' className="navlink" activeStyle>
                        Dashboard
                    </Link>
                    <Link to='/checkin'className="navlink" activeStyle>
                        Member
                    </Link>
                    <Link to='/checkout' className="navlink" activeStyle>
                        Admin Manager
                    </Link>
                    <Link to="/account" className="navlink" activeStyle>
                        Account
                    </Link>
                </div>
            </div>
            

        </>
    );
};

export default Navbar;
