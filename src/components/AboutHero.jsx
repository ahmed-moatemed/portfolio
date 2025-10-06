import React from 'react'
import '../style/AboutHero.css'

function AboutHero() {
  return (
    <>
      <div>
        <div className='about-hero'
          style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%',
            marginTop: '60px',
            gap: '50px',
          }}
        >
          <div className='contant-hero'
            style={{
              height: '100%',
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: "flex-start",
              flexDirection: 'column',
              gap: '20px',
              padding: '20px',
              marginTop: '20px'
            }}
          >

            <h2>Hi, I'm Ahmed Ibrahim Moatemed</h2>

            <p>
              I'm a Front-End Developer and Computer Science graduate passionate about transforming ideas into interactive, user-friendly web experiences. I love the immediate gratification of seeing my code come to life on the screen — there's something incredibly satisfying about building something tangible that users can see, touch, and interact with.
            </p>
          </div>

          <div >

            <img className='img-portfolio' src="./images/m33.jpg" alt="mo3"   
              
            />

          </div>

        </div>
      </div>
    </>
  )
}

export default AboutHero