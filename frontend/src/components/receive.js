import React from 'react';
import { useState } from "react";
import Navbar from './navbar';

const Receive = () => {

  const [code,setCode]=useState('');
  const [text,setText]=useState('');
  const [show,setShow]=useState(false);
  
  const handleclick=async()=>{
    const response=await fetch(`${window.location.origin}/api/sharenote/getnote`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({code: code})
        });
        const data=await response.json();
        if(data.ok){
            setText(data.note);
        }
        setShow(true);
  }

  const copy=()=>{
    navigator.clipboard.writeText(text);
}
  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="container my-4" style={{ fontFamily: 'Sofia, sans-serif', fontWeight: 'bold', fontSize: '40px', textAlign: 'center', color: 'blue' }}>
          Receive a Note
        </div>
        <div>
          <div className='container2 d-flex justify-content-center my-2'>
            <label className="col-form-label" style={{ fontFamily: 'Sofia, sans-serif', fontWeight: 'bold', fontSize: '20px',color: 'blue'}}>Enter your code below</label>
          </div>
          <div className='container2 d-flex justify-content-center my-2'>
            <input type="number" className="form-control" style={{width:'250px'}} onChange={(e)=>{setCode(e.target.value)}}/>
          </div>
          <div className='container2 d-flex justify-content-center my-2'>
            <button type="button" className="btn btn-primary" style={{width:'250px'}} onClick={handleclick}>Retrieve</button>
          </div>
        </div>
        <div className='my-4'>
          {/* eslint-disable-next-line*/} 
            <a style={{ fontFamily: 'Sofia, sans-serif', fontWeight: 'bold', fontSize: '20px',color: 'blue'}}>Your Retrieved text is below</a>
        </div>
        {show&&<button type="button" className="btn btn-primary mb-2" onClick={copy} style={{width:'150px'}}>Copy</button>}
        <div className="container">
          {/* eslint-disable-next-line*/} 
          <pre>{text}</pre>
        </div>
      </div>
    </>
  )
}

export default Receive;
