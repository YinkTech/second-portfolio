import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Separator from './component/Separator'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Footer from './component/Footer'


const App = () => {
  AOS.init();
  return (
    <div className="App bg-[#f3f4f6]">
      <Header />
      <Home />
      <About />
      <Skills />
      <Separator />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
