import React, {useState} from 'react';
import "./styles.css";


export default function Login() {
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");
  const [data, Setdata] = useState([]);
  
  return(
    <div className="login-wrapper">
      <div className='container'>
        <h1>Please Log In</h1>
          <form>
            <label className='text-input'>
              <p>Email:</p>
              <input type="text" />
            </label>
            <label className='text-input'>
              <p>Password:</p>
              <input type="password" />
            </label>
            <div className='btn'>
              <button type="submit">
                Submit
              </button>
            </div>
            <a href='#'>Forgot Password?</a>
          </form>
      </div>
    </div>
  )
}