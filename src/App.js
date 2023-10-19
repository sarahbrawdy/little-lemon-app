import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Reservations from './Components/Reservations'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Footer/>
      <Routes>
        <Route path ="/Reservations" element {<Reservations />} />
      </Routes>
    </>
  )
}

export default App;
