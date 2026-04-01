import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import {  Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './Pages/Home/Home';
import Footer from './components/Footer';
import Company from './Pages/Company/company';
import Products from './Pages/Products/Products';
import Industries from './Pages/Industries/Industries';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      
      <ScrollToTop/>
      <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer/>

    </>
  )
}

export default App
