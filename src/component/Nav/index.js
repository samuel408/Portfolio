import React from 'react';

function Nav(props){
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
      } = props;
    return(
        
        <header className="" >


  <h1 className=" name col-sm">
      Samuel Saldivar
  </h1>   
   <nav>
   <div className=" container">
  <div className=" marginTop row">
 
    <a  className=" firstNav col-sm" href="#About" onClick={() => setContactSelected(false)}>
      About Me
    </a>
    <span href="/"  onClick={() => setContactSelected(true)} className=" contact col-sm">      Portfolio
    </span>
    <span href="/"  onClick={() => setContactSelected(true)} className=" contact col-sm">
      Contact
    </span>

    <span href="#Resume"  onClick={() => setContactSelected(true)} className=" contact col-sm">
              Resume
    </span>
  </div>
</div>
  </nav>
        </header>
    )
};

export default Nav;