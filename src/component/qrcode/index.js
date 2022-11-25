import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {QrReader} from 'react-qr-reader';
import { TextareaAutosize } from '@mui/material';

import "./styles.css";

function QRscanner() {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <div className='scanqr'>     
          <center>
            <div className='camera'>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                />
            </div>
            <TextareaAutosize
                style={{fontSize:18, width:320, height:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            />  
          </center>

      </div>
    );
  }
  
  export default QRscanner;
  