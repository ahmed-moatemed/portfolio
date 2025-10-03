import React from 'react';
import '../style/Footer.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';

function Footer() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} My Portfolio Site. All rights reserved.</p>
      </div>

      <div className="social-links">
        <a href="https://github.com/ahmed-moatemed"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/ahmed-ibrahim-moatemed-00253b268/"><LinkedInIcon /></a>
        <a href="mailto:matamedahmed@gmail.com"><OutgoingMailIcon /></a>
      </div>

    </footer>
    </div>
  );
}

export default Footer;
