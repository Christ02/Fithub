import React, { useContext, useState } from 'react';
import './Login.css';
import crossIcon from '../../assets/cross_icon.svg';
import { AppContext } from '../../context/App.Context';
import axios from "axios"

const Login = ({ setshowLogin }) => {
  const { url, setToken } = useContext(AppContext);
  const [currState, setCurrState] = useState("Login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');  // Resetea el estado del error

    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setshowLogin(false);
      } else {
        setError(response.data.message);  // Muestra el error en la interfaz
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login'>
      <form onSubmit={onLogin} className="login-container">
        <div className='login-title'>
          <h2>{currState}</h2>
          <img onClick={() => setshowLogin(false)} src={crossIcon} alt="Close" />
        </div>

        <div className='login-inputs'>
          {currState === "Login" ? null : (
            <input 
              name='name' 
              onChange={onChangeHandler} 
              value={data.name} 
              type='text' 
              placeholder='Your name' 
              required 
            />
          )}
          <input 
            name='email' 
            type='email' 
            onChange={onChangeHandler} 
            value={data.email} 
            placeholder='Your email' 
            required 
          />
          <input 
            name='password' 
            onChange={onChangeHandler} 
            value={data.password} 
            type='password' 
            placeholder='Password' 
            required 
          />
        </div>

        {error && <p className="error-message">{error}</p>}  {/* Mostrar errores */}

        <button type='submit' disabled={loading}>
          {loading ? 'Processing...' : currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;
