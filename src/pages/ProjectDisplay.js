import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
  const githubLinks = [
    "https://github.com/Preethams77/Typing-test",
    "https://github.com/Preethams77/cryptodashboard",
    "https://github.com/Preethams77/E-commerce"
  ];
  const handleGithub = () => {
    window.open(githubLinks[id], '_blank');
  }
  const projectLinks=[
   " https://typing-test-preethams.netlify.app/",
   "https://cryptodashboard-preethams.netlify.app/",
   "https://e-commercepreethams.netlify.app/"
 ]
 const handleLink=()=>{
  window.open(projectLinks[id],'_blank')
 }
 const Summary=[
  "This website allows you to test your typing speed and save your results.",
  "This website allows you track crypto currencies and their performance in real-time.",
  "This is a simple E-commerce website where you can view products and add them to cart."
 ]
 
   const {id}=useParams();
    const project=projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}  onClick={handleLink}/>
        
        <a href={project.link}>
        <h3>{project.link}</h3>
    </a>
    <p>{Summary[id]}</p>
        <GitHubIcon  onClick={handleGithub}/>
    </div>
  )
}

export default ProjectDisplay