import React from "react";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/header"
import Systempage from "./pages/SystemPage/systemPage"
import HomePage from "./pages/HomePage/homePage"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import AboutRFID from "./pages/AboutRFID/aboutRFID";
import Product from "./pages/Products/Product"
import Calculator from "./pages/Calculator/Calculator";
import Login from "./pages/Login/Login";
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/system" element={<Systempage/>}/>
        <Route path="/aboutRFID" element={<AboutRFID/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/RfidCalculator" element={<Calculator/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
