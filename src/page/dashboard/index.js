import React, {useState} from "react";
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import "./styles.css";

function Dashboard() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());


  return (
    <div className="dash-main">

      <div className="calender">
        <h1>Calendar of Year</h1>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange = {true}
        />
        {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
      </div>
    </div>

  )
}

export default Dashboard;