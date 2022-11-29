import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {QrReader} from 'react-qr-reader';

import "./styles.css";

const  baseURL = "https://my-json-server.typicode.com/hoadesign09/ApiServer/Checkin/1" ;

function QRscanner() {

    const [qrscan, setQrscan] = useState("");

    const handleError = err => {
    console.error(err)
    }

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
          setQrscan(response.data);
        });
      }, []);

      function CheckinPost() {
        axios
          .post(`${baseURL}/1`, {
            status: "Checkin Complete!",
            message: "Congratulations! Keeping to checkin everyday!"
          })
          .then((response) => {
            setQrscan(response.data);
          });
      }


    return (
          <center>
            <div className='camera'>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={CheckinPost}
                />
            </div>
          </center>
    );
  }
  
  export default QRscanner;
  