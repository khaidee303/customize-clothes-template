import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>} exact />
        <Route path='/men' element = {<Men/>} />
        <Route path='/women' element = {<Women/>} />
        <Route path='/sign-up' element = {<SignUp/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
