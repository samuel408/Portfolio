import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

function Footer(){

    return (
        <footer>

         <h1>  
             
             <a href={"https://github.com/samuel408"}>
             <FaGithub ></FaGithub>
             </a>

             <a href={"https://www.linkedin.com/in/samuel-saldivar-98aa24198/"}>

             <FaLinkedin ></FaLinkedin>
             
             </a>

             
          </h1>




        </footer>
    )
}

export default Footer;