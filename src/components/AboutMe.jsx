import React from 'react'

function AboutMe() {
  return (
    <>
      <div>
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            margin: '60px 0px',
            maxWidth: '800px',
          }}
        >
          <h2 style={{fontSize: '30px', textAlign: 'center'}}>More About Me</h2>

          <p style={{textAlign: 'center', }}>
            My fascination with front-end development started during my university years when I discovered the magic of turning static designs into dynamic, responsive interfaces. What draws me to front-end is the perfect blend of creativity and logic — writing clean code while crafting beautiful user experiences
          </p>

          <p style={{textAlign: 'center',}}>
            I'm a detail-oriented problem solver who enjoys the challenge of debugging complex issues and finding elegant solutions. Every project is an opportunity to learn something new and push my skills further.
          </p>

          <p>
            I work with modern technologies to build responsive and performant web applications:
          </p>
          <ul style={{paddingLeft: '20px'}}>
            <li>Core: HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Framework: React.js with Hooks</li>
            <li>State Management: Redux and Context API</li>
            <li>UI Librarie: Material-UIs</li>
            <li>Version control: Git & GitHub</li>
            <li>Responsive Design & Cross-browser Compatibility</li>
            <li>Tools and Deployment: Netlify and vercel</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AboutMe
