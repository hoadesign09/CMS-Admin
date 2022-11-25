import React, { useEffect, useState } from "react";
import axios from "axios";

const  baseURL = "https://my-json-server.typicode.com/hoadesign09/ApiServer/login/1" ;

function GetUser() {
    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get(baseURL).then((res) => {
            setData(res.data);
        });
    }, []);

    return(
        <div>
            <p>{data.full_name}</p>
            <p>{data.username}</p>
            <p>{data.password}</p>
        </div>
    )
}

export default GetUser;