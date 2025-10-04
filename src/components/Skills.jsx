import React from 'react'
import '../style/Skills.css';

function Skills() {
  const skills = [
    { id: 1, name: "React", color: "#1565c0" },
    { id: 2, name: "JavaScript", color: "#eeff41" },
    { id: 3, name: "C++", color: "#9e9e9e" },
    { id: 4, name: "Matrail Ui", color: "#03a9f4" },
    { id: 5, name: "Vite", color: "#673ab7" },
    { id: 6, name: "Python", color: "#ffea00" },
    { id: 7, name: "HTML", color: "#e34c26"},
    { id: 8, name: "CSS", color: "#264de4"},
    { id: 9, name: "Subabase", color: '#00695c'},
    { id: 10, name: "Git", color: '#f44336'},
    { id: 11, name: "GitHub", color: '#9e9e9e'},
    { id: 12, name: "VS Code", color: '#0078d7'},
    { id: 13, name: "Java", color: '#fbc02d'},
    { id: 14, name: "Cursor", color: '#616161'},
  ];
  return (
    <div className='skills-container'>
        <h1>Skills && Tools</h1>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className='skills'>
          {skills.map((skill) => {
            return(
              <li key={skill.id} style={{color: skill.color}}>
                {skill.name}
              </li>
            );
          })}
        </ul>
    </div>
  )
}

export default Skills
