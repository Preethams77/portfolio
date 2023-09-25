import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";


const Footer = () => {

  const handleGithub = (e) =>{
    window.open("https://github.com/Preethams77", '_blank');
  }

  const handleLinkedin = () =>{
    window.open("https://www.linkedin.com/in/preetham-konala-787827209/", '_blank');
  }
  const handleInstagram = () =>{
    window.open("https://www.instagram.com/preetham_.konala/", '_blank');
  }
  const handleEmail = () =>{
    window.location.href = "mailto:preetham.konala@gmail.com?subject=Hello%20World&body=This%20is%20a%20test";
}

  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon onClick={handleInstagram}/>
            <LinkedInIcon  onClick={handleLinkedin}/>
            <GitHubIcon  onClick={handleGithub}/>
            <EmailIcon onClick={handleEmail}/>
        </div>
        <p>&copy;2023 preetham konala </p>
    </div>
  )
}

export default Footer