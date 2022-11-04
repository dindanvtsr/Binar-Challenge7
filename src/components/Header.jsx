import '../App.css';
import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';

function Header({ setToken }) {
  const handleLogout = () => {
    window.location.reload();
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      <div className='navbar1'>
        <h1><b className='logo'>Movielist</b></h1>
      </div>

      {!localStorage.getItem("token")? (
        <>
        <div className='navbar3'>
          <Link to="/login">
            <Button type="primary" shape="round" danger ghost className='buttonlr'>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button type="primary" shape="round" danger className='buttonlr'>
              Register
            </Button>
          </Link>
        </div>
          </>
      ) : (
        <>
        <div className='navbar3'>
          <Button type="primary" shape="round" danger className='buttonlr' onClick={handleLogout}>
            Logout
          </Button>
        </div>
        </>
      )}
    </div>
  )
}

export default Header;
