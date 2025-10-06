import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ProjectHome from './components/ProjectHome'

import { Link } from 'react-router'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Net from './components/Net'

function Home() {
  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100vw'
      }}
    >
      <div 
        style={{
          width: '90%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexDirection: 'column' 
        }}
      >
        {/* Components For Home Page */}
        <Hero />

        <Skills />

        <ProjectHome />

        <Link to="/projects" style={{marginBottom: '20px', }}>
          <button style={{
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
            }}
          >
            View More Projects 
            <ArrowRightAltIcon style={{marginLeft: '5px',}} />
          </button>
        </Link>

        <Net />

      </div>      
    </div>
  )
}

export default Home
