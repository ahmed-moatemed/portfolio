import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import projects from '../data/projects.json';

function ProjectHome() {
  return (
    <>
    <div style={{marginBottom: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px'}}>

      {projects.map((project) => {

        if (project.featured) {
          return (
            <Card key={project.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 120 }}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {project.description}
                </Typography>
                <Typography variant="caption">Technologies used : </Typography>
                {project.technologies.map((tech) => {
                  return (
                    <Typography key={tech} variant="caption" sx={{ color: 'text.secondary', marginRight: '5px' }}>
                      {tech}
                    </Typography>
                  )
                })}
              </CardContent>
              <CardActions>
                <Button variant='contained' size="medium" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</Button>
                {project.link && <Button variant='outlined' size="medium" href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</Button>}
              </CardActions>
            </Card>
          )
        }
        return null
      })}
    </div>
    </>
  )
}

export default ProjectHome
