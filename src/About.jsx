import React from 'react'

import AboutHero from './components/AboutHero'
import AboutMe from './components/AboutMe'

function About() {
  return (
    <>
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

          <AboutHero />

          <AboutMe />
        </div>

      </div>
    </>
  )
}

export default About
