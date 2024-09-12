import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Header.css';
import { AppContext } from '../../context/App.Context';
import user from '../../assets/user.svg'
import LogOutIcon from '../../assets/bx-log-out.svg'

const Header = ({ toggleTheme, currentTheme, setshowLogin}) => {

    const {token,setToken}=useContext(AppContext);

    const navigate = useNavigate();
    const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")

    }
  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/" className="app-name">
          <h1 className="app-name">FitHub</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/food-log">Food Log</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="header-right">
        {!token?<button onClick={()=>setshowLogin(true)} className='premium-button'>Sign In</button>
        :<div className='navbar-profile'>
            <img src={user} alt="" />
            <ul className="nav-profile-dropdown">

              <li onClick={logout}><img src={LogOutIcon} alt="" /><p>Log Out</p></li>
              
            </ul>
          </div>}
        <div 
          className={`theme-toggle ${currentTheme}`} 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <div className="toggle-circle"></div>
          <div className="icon sun-icon">☀️</div>
          <div className="icon moon-icon">🌙</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
