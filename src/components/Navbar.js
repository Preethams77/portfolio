import React, { useEffect, useState } from 'react';
import {Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"

const Navbar = () => {
  const [expandNavbar,setExpandNavbar] =useState(false);
  const location =useLocation();
  useEffect(()=>{ //run this useeffect whenever the location changes
    setExpandNavbar(false);
  },[location])
  return ( //changes according to prev value.
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'> 
            <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}> 
              < MenuRoundedIcon/></button>
        </div>
        <div className='links'>
            <Link to ="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>

        </div>
    </div>
  )
}

export default Navbar