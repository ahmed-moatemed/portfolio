import React from 'react'
import { Link } from 'react-router'

function Net() {
  return (
    <>
      <div 
        style={{
          textAlign: 'center', 
          marginTop: '100px', 
          marginBottom: '10px', 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
          padding: '50px', 
          borderRadius: '10px', 
          width: '100vw'
        }}
      >
        
        <h2 style={{marginBottom: '20px'}}>Let's Create Something Beautiful Together</h2>

        <p style={{ fontWeight: '200', marginBottom: '20px'}}>I'm a frontend developer passionate about crafting elegant, user-friendly interfaces 
          that blend stunning design with flawless functionality. Let's turn your vision into reality!
        </p>

        <Link to='/contact'>
          <button>Start a Conversation ✉️</button>
        </Link>
      </div>
    </>
  )
}

export default Net
