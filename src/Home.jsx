import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'

function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
      <div style={{width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Hero />
        <Skills />
      </div>      
    </div>
  )
}

export default Home
