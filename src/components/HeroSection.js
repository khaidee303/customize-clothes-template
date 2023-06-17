import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='../videos/video1.mp4' autoPlay loop muted />
        <h1>DESIGNS & CLOTHES</h1>
        <p>Your Way</p>
        <div className="hero-btns">
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                EXPLORE
            </Button>
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                CREATE <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;