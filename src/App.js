import React, { useState } from 'react';
import Nav from './component/Nav';
import About from './component/About';
import Footer from './component/Footer';
import Contact from './component/Contact'
import Resume from './component/Resume';


function App() {
  const [categories] = useState([
    {
      name: 'About me',
      description: 'A little about me',
    },
    { name: 'Portfolio', description: 'some of my work' },
    { name: 'Contact', description: 'Reach out to me' },
    { name: 'Resume', description: 'My skills' },
  ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const [contactSelected, setContactSelected] = useState(false);
  
    return (
      <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
 {!contactSelected ? (
    <>
      <About></About>
      <Resume></Resume>

    </>
  ) : (
      <Contact></Contact>

    )
  }

<Footer></Footer>
</div>

);
}

export default App;
