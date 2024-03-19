import React from 'react';
import Home from './components/home';
import Rec from './components/receive';
import Send from './components/send';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/receive" element={<Rec/>} />
          <Route path="/send" element={<Send/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
