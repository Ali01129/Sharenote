import React from 'react';
import { useState } from "react";
import Navbar from './navbar';

const Send = () => {


    const [text,setText]=useState('');
    const [code,setCode]=useState('0');
    const [show,setShow]=useState(false);

    const handleclick=async()=>{
        const response=await fetch(`${window.location.origin}/api/sharenote/addnote`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: text})
        });
        const data=await response.json();
        if(data.ok){
            setCode(data.code);
        }
        setShow(true);
    }
    const copy=()=>{
        navigator.clipboard.writeText(code);
    }

  return (
    <>
        <Navbar/>
        <div className="container">
            <div className="container my-4" style={{ fontFamily: 'Sofia, sans-serif', fontWeight: 'bold', fontSize: '40px', textAlign: 'center', color: 'blue' }}>
                Send a Note
            </div>
            <div className="container my-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ fontFamily: 'Sofia, sans-serif', color: 'blue', fontWeight: 'bold'}}>Write below:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter you text here that you want to send' rows="10" onChange={(e)=>{setText(e.target.value)}}></textarea>
            </div>
            <div className="container my-3">
                {/* eslint-disable-next-line*/}
                <a>Receivable Code: {code}</a>
            </div>
            <div className="container">
                <button type="button" className="btn btn-primary mx-2" onClick={handleclick}>Send</button>
                {show&&<button type="button" className="btn btn-primary mx-2" onClick={copy}>Copy the code</button>}
            </div>

        </div>
    </>
    )
}

export default Send
