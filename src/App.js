import React, { useState } from 'react';
import Nav from './component/Nav';
import About from './component/About';
import Footer from './component/Footer';
import Contact from './component/Contact'
import Resume from './component/Resume';
import Work from './component/Work';


function App() {
  const [categories] = useState([
    {
      // name: 'Grocery aisle',
      // category: 'work',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  
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
      <Work></Work>

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
