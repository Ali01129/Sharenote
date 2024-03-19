import React from 'react';
import { useNavigate } from "react-router-dom";
import './mode.css';

const Navbar = () => {
  const navigate = useNavigate();

  const tohome=()=>{
    navigate("/")
  }
  const toabout=()=>{
    navigate("/")
  }

  return (
    <div className="container-fluid my-3">
      <ul className="nav d-flex align-items-center justify-content-between"style={{ color: 'black', fontFamily: 'Sofia, sans-serif',fontWeight:'bold',fontSize:'18px'}}>
        <li className="nav-item">
        <button className="nav-link active" onClick={tohome} style={{color: 'blue' ,fontSize:'24px'}}>
          <b>ShareNote</b>
        </button>
        </li>
        <div className="nav-item" style={{display: 'flex'}}>
          {/* Rest of the items in the middle */}
          <button className="nav-link" onClick={tohome} style={{ color: 'black' }}>
            Home
          </button>
          <button className="nav-link" onClick={toabout} style={{ color: 'black' }}>
            About
          </button>
          <button className="nav-link disabled" disabled>
            Made by Ali Nawaz
          </button>
        </div>
        <li className="nav-item mt-2">
          <label className="ui-switch">
            <input type="checkbox" />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
