import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Skills from './component/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Separator from './component/Separator'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Main from './component/Main';

const App = () => {
  AOS.init();
  return (
    <div className="App bg-[#f3f4f6]">
      <Header />
      <Main />
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
