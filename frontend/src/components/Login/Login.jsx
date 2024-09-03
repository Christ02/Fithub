import React, { useState } from 'react';
import './Login.css';

const Login = ({setshowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up")

  return (
    <div className='login'>
      <form className="login-container">
        <div className='login-title'>
            <h2>{currState}</h2>
            
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
      </form>
    </div>
  );
};

export default Login;
