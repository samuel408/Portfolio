import React from 'react';

function Nav(){
    return(
        <header >
  <h1 className=" name col-sm">
      Samuel Saldivar
  </h1>   
   <nav>
   <div className=" container">
  <div className=" marginTop row">
 
    <a href="/" className=" firstNav col-sm">
      About Me
    </a>
    <a href="/" className="col-sm">
      Portfolio
    </a>
    <a href="/" className="col-sm">
      Contact
    </a>
    <a href="/" className="col-sm">
      Resume
    </a>
  </div>
</div>
  </nav>
        </header>
    )
};

export default Nav;