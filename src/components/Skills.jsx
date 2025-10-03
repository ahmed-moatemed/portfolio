import React from 'react'
import '../style/Skills.css';

function Skills() {
  const skills = [
    { name: "React", color: "#1565c0" },
    { name: "JavaScript", color: "#eeff41" },
    { name: "C++", color: "#9e9e9e" },
    { name: "Matrail Ui", color: "#03a9f4" },
    { name: "Vite", color: "#673ab7" },
    { name: "Python", color: "#ffea00" },
    {name: "HTML", color: "#e34c26"},
    {name: "CSS", color: "#264de4"},
    {name: "Subabase", color: '#00695c'}
  ];
  return (
    <div className='skills-container'>
        <h1>Skills && Tools</h1>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className='skills'>
          {skills.map((skill) => {
            return(
              <li style={{color: skill.color}}>
                {skill.name}
              </li>
            );
          })}
        </ul>
    </div>
  )
}

export default Skills
