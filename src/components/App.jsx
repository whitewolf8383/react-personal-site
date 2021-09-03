import React from 'react';

// Components
import Header from './headerComponents/Header';
import Navbar from './navbarComponents/Navbar';
import SectionHeader from './SectionHeader';
import About from './aboutComponents/About';
import Contact from './contactComponents/Contact';
import Footer from './footerComponents/Footer';

function App() {
  return(
    <div>
      <Header />
      <Navbar />
      <SectionHeader value="ABOUT ME"/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;