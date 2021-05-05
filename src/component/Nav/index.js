import React from 'react';

function Nav(props){
    const {
        categories = [],
        setCurrentCategory,
        pageSelected,
        currentCategory,
        setPageSelected,
      } = props;
    return(
        
        <header className="navbar " >


  <h1 className=" name col-sm">
      Samuel Saldivar
  </h1>   
   <nav className="navbar-collapse " id="navbarSupportedContent">
   <div className=" container">
  <div className=" mediaQ marginTop row ">
 
    <a  className=" navbar-nav mr-auto firstNav col-sm" href="#About" onClick={() => setPageSelected("about")}>
      About Me
    </a>
    <a href="#Work"  onClick={() => setPageSelected("portfolio")} className="navbar-nav mr-auto contact col-sm">      Portfolio
    </a>
    <a href="#Contact"  onClick={() => setPageSelected("contact")} className="navbar-nav mr-auto contact col-sm">
      Contact
    </a>

    <a href="#Resume"  onClick={() => setPageSelected("resume")} className=" bottommm navbar-nav mr-auto contact col-sm">
              Resume
    </a>
  </div>
</div>
  </nav>
        </header>
    )
};

export default Nav;