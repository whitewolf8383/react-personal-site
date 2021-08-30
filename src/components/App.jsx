import React from 'react';

// Components
import Header from './headerComponents/Header';
import Navbar from './navbarComponents/Navbar';
import SectionHeader from './SectionHeader';
import About from './aboutComponents/About';

function App() {
  return(
    <div>
      <Header />
      <Navbar />
      <SectionHeader value="ABOUT ME"/>
      <About />
      <SectionHeader value="PORTFOLIO"/>
      <SectionHeader value="CONTACT"/>
    </div>
  );
}

export default App;