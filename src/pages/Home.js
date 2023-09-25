import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "framer-motion"; 
import "../styles/Home.css";

const Home = () => {
  const handleGithub = (e) =>{
    window.open("https://github.com/Preethams77", '_blank');
  }

  const handleLinkedin = () =>{
    window.open("https://www.linkedin.com/in/preetham-konala-787827209/", '_blank');
  }
  const handleEmail = () =>{
    window.location.href = "mailto:preetham.konala@gmail.com?subject=Hello%20World&body=This%20is%20a%20test";
}
  return (
    <div className='home'>
      <div className='about'>
      <motion.h2 //framer motion
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi,My Name is Preetham
        </motion.h2>
      
      <div className='prompt'>
      <motion.p //framer motion
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.5 }}
        >
           A Frontend developer with a passion for learning and creating. 
        </motion.p>
   
     <EmailIcon onClick={handleEmail}/>
     <GitHubIcon  onClick={handleGithub}/>
     <LinkedInIcon  onClick={handleLinkedin}/>
      </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
             <h2>Front-End</h2>
             <span>
              ReactJS,Redux,HTML,CSS,BootStrap,StyledComponents,MaterialUI
             </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>

        </ol>
      </div>
    </div>
    
  )
}

export default Home