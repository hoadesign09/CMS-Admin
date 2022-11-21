import React, {useState} from 'react';
import "./styles.css";

export default function Login() {
  
  const[Username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  return(
    <div className="login-wrapper">
      <div className='container'>
        <h1>Please Log In</h1>
          <form>
            <label className='text-input'>
              <p>Username</p>
              <input type="text" />
            </label>
            <label className='text-input'>
              <p>Password</p>
              <input type="password" />
            </label>
            <div className='btn-login'>
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}