import React from "react";
import "./styles.css"


function Header() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <div className="main-header">
            <div className="user-name">
                <p>Tran Van Anh</p>
            </div>
            <div className="current-date">
                <p>Today is {date}</p>

            </div>
        </div>
    )
}

export default Header;