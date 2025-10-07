import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  CircularProgress
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        'service_rtbrfas',      
        'template_g3w37w7',    
        form.current,
        'MSUEz18RgxazLX5QS'     
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setLoading(false);
          setSuccess(true);
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <div
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100vw',
        marginTop: '11vh',
        marginBottom: '3vh',
      }}
    >
    <div
      // style={{
      //   width: '90%', 
      //   display: 'flex', 
      //   justifyContent: 'center', 
      //   alignItems: 'center', 
      //   flexDirection: 'column' ,
        
      // }}
    >
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1">
          Have a project in mind or want to discuss opportunities? 
          Feel free to reach out!
        </Typography>
      </Box>

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          backgroundColor: 'background.paper',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <TextField
          fullWidth
          label="Your Name"
          name="from_name"
          variant="outlined"
          required
          disabled={loading}
        />

        <TextField
          fullWidth
          label="Your Email"
          name="user_email"
          type="email"
          variant="outlined"
          required
          disabled={loading}
        />

        <TextField
          fullWidth
          label="Subject"
          name="subject"
          variant="outlined"
          required
          disabled={loading}
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={6}
          variant="outlined"
          required
          disabled={loading}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
          disabled={loading}
          sx={{ alignSelf: 'flex-start' }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>

        {success && (
          <Alert severity="success" onClose={() => setSuccess(false)}>
            Message sent successfully! I'll get back to you soon.
          </Alert>
        )}

        {error && (
          <Alert severity="error" onClose={() => setError(false)}>
            Failed to send message. Please try again or email me directly.
          </Alert>
        )}
      </Box>

      {/* <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Other Ways to Connect
        </Typography>
        <Typography variant="body2">
          Email: your.email@example.com
        </Typography>
        <Typography variant="body2">
          LinkedIn: linkedin.com/in/yourprofile
        </Typography>
        <Typography variant="body2">
          GitHub: github.com/yourusername
        </Typography>
      </Box> */}
    </Container>
    </div>
    </div>
  );
}

export default Contact;