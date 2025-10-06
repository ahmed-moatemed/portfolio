import React from 'react';
import { Link } from 'react-router';
import '../style/Hero.css';

function Hero() {
  return (
    <div className='hero'>

      <h2>Hi, I'm <span>Ahmed Ibrahim</span></h2>

      <p>A passionate Front-end developer crafting beautiful digital experiences with cutting-edge technologies.</p>

      <div className='hero-buttons'>

        <Link to='/about'>
          <button>About Me</button>
        </Link>

        <Link to='/contact'>
          <button>Contact Me</button>
        </Link>

      </div>
      
    </div>
  )
}

export default Hero
