import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './navbar';
import './button.css';

const Home = () => {

  const navigate = useNavigate();

  const send=()=>{
    navigate('/send');
  }
  const rec=()=>{
    navigate('/receive');
  }

  return (
    <div>
      <Navbar />
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '68vh'}}>
        <div style={{ fontFamily: 'Sofia, sans-serif', fontWeight: 'bold', fontSize: '60px', textAlign: 'center', color: 'blue' }}>
          ShareNote
        </div>
        <div style={{ fontFamily: 'Sofia, sans-serif', fontSize: '40px', textAlign: 'center' }}>
          Share, Collaborate, Innovate
        </div>
        <div className='d-flex justify-content-center my-3'>
            <button className='main mx-2' onClick={send}>
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className='icon1'
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                    </svg>
                    </div>
                </div>
            <span>Send</span>
            </button>
             <button className='main'onClick={rec}>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="30"
                      height="30"
                      class="icon"
                    >
                      <path
                        d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Recieve</span>
              </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
