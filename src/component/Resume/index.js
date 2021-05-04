import React from 'react';
import photo from "../../assets/work/work/headshot.jpeg";
import { Col,Image} from 'react-bootstrap'


function  Resume(){
return(


<div className="container">
<div>
    <h1 className="title">
        Resume
    </h1>

</div>
  <div class="row">
    <div class="col-sm">
    <Col xs={6} md={4}>
<Image src={photo} thumbnail />
</Col>    
</div>
    <div class="col-sm">
        <h4> skills</h4>
        <ul>
        <li>Java</li>
        <li>JavaScript
            <ul>
            <li>bootstrap.js</li>
            <li>jquery.js</li>
            <li>node.js</li>
            <li>express.js</li>
            <li>handlebars.js</li>
            <li>react.js</li>
            </ul>
        </li>
        <li>Html</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>insomnia</li>
        <li>heroku</li>
        <li>git</li>

        </ul>
       




    </div>
    <div class="col-sm">
        <h4> Education</h4>
        <ul>
       <li>
           University of California, Merced 
           <ul>
              <li> B.S Computer Science And Engineering</li> 
              <li>graduation spring 2023</li> 
           </ul>

       </li>
       <li>
            University of California, Berkeley ( Trilogy Bootcamp )
           <ul>
              <li> MERN full stack web development certification</li> 
              <li>graduation May 2021</li> 
           </ul>

       </li>
       
       
        </ul>
       




    </div>

</div>
</div>

)
}

export default Resume;