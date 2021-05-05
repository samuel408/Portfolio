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
        
        <header className="" >


  <h1 className=" name col-sm">
      Samuel Saldivar
  </h1>   
   <nav>
   <div className=" container">
  <div className=" marginTop row">
 
    <a  className=" firstNav col-sm" href="#About" onClick={() => setPageSelected("about")}>
      About Me
    </a>
    <a href="#Work"  onClick={() => setPageSelected("portfolio")} className=" contact col-sm">      Portfolio
    </a>
    <a href="#Contact"  onClick={() => setPageSelected("contact")} className=" contact col-sm">
      Contact
    </a>

    <a href="#Resume"  onClick={() => setPageSelected("resume")} className=" contact col-sm">
              Resume
    </a>
  </div>
</div>
  </nav>
        </header>
    )
};

export default Nav;