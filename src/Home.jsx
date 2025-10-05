import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ProjectHome from './components/ProjectHome'

import { Link } from 'react-router'

function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
      <div style={{width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Hero />
        <Skills />
        <ProjectHome />
        <Link to="/projects" style={{marginBottom: '20px'}}><button>View More Projects</button></Link>
      </div>      
    </div>
  )
}

export default Home
