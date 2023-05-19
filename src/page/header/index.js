import React, {useState, useEffect} from "react";
import axios from "axios";

import "./styles.css"

const  baseURL = "https://my-json-server.typicode.com/hoadesign09/ApiServer/login/1" ;

function Header() {

    const current = new Date();
    const [data, setData] = useState([])
    // const currentDateTime =  Date().toLocaleString();
    const date = `${current.getHours()}:${current.getMinutes()} - ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    useEffect(() =>{
        axios.get(baseURL).then((res) => {
            setData(res.data);
        });
    }, []);

    return(
        <div className="main-header">
            <div className="user-name">
                <p>{data.full_name}</p>
            </div>
            <div className="current-date">
                <p>{date}</p>
                {/* <p>{currentDateTime}</p> */}
            </div>
        </div>
    )
}

export default Header;