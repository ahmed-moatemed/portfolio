import React from 'react'
import projects from '../data/projects.json';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/material';

function Project() {
  return (
    <div style={{width: '100%'}}>
      
      {projects.map((project, index) => {

        const isEven = index % 2 === 0;
        
        return (
          <Card 
            className='project-card' 
            key={project.id} 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
              width: '100%', 
              margin: '20px 0px', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: '20px',
              background: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
              color: 'white',
              
            }}
          >

            <CardMedia
              component="img"
              sx={{ 
                width: { xs: '100%', md: '60%' }
              }}
              image={project.image}
              alt={project.title}
            />

            <Box 
              className='contect-card' 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                width: { xs: '100%', md: '40%' }
              }}
            >
            
              <CardContent>

                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>

                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                  {project.description}
                </Typography>

                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                  Technologies used:
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '5px' }}>
                  {project.technologies.map((tech) => {
                    return (
                      <Typography 
                        key={tech} 
                        variant="caption" 
                        sx={{ 
                          backgroundColor: "#546e7a",
                          borderRadius: '10px',
                          padding: '5px 10px',
                          color: 'white'
                        }}
                      >
                        {tech}
                      </Typography>
                    )
                  })}
                </Box>

              </CardContent>

              <CardActions>

                <Button 
                  variant='contained' 
                  size="medium" 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  endIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>

                {project.link && (
                  <Button 
                    variant='contained' 
                    size="medium" 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}

              </CardActions>

            </Box>
            
          </Card>
        )
      })}

    </div>
  )
}

export default Project