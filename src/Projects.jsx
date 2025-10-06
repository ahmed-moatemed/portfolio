import React from 'react'
import Project from './components/Project'

function Projects() {
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
            flexDirection: 'column',
            marginTop: '11vh'
          }}
        >

          <h1>
            My Projects
          </h1>

          <Project />

        </div>

      </div>
    </>
  )
}

export default Projects
