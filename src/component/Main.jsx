import React from 'react';
import AiImg from './../img/ai-bg.png'

const Main = () => {
  return (
    <div className=' main-back'>
      <div className='flex flex-col w-auto md:flex-row items-center px-2 sm:px-[100px]'>
        <div className='md:w-[50%]'
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
        data-aos="flip-up"
        >
          <h1 className='md:text-7xl text-[#464f56] font-extrabold text-3xl pt-12 ' style={{fontFamily: 'widy'}}>Hello, I'm  <span className='block text-[#018bed] text-3xl md-text-8xl'> Olayinka Ayeni </span> </h1>
          <h6 className='my-3 font-bold text-[#3b444b] mt-4 font-serif'>
          I am a full-stack software developer with a passion for creating innovative and user-friendly websites, 
          features, and products. My expertise encompasses a range of technologies including React, JavaScript, Ruby, 
          and Ruby on Rails. 
          </h6>
          
          <div className='mt-10 '>
          <button className='bg-[#018bed] p-3 text-white me-5 text-2xl font-bold rounded-xl hover:bg-white hover:text-[#018bed] ease-out duration-150 hover:border-2 hover:border-[#018bed] shadow-lg m-2'>Download Resume</button>

          <button className='bg-[#fff] p-3 text-[#018bed] text-2xl font-bold border-2 border-[#018bed] shadow-lg rounded-xl hover:text-white hover:bg-[#018bed] ease-out duration-150 m-2'>Let's Talk</button>
          </div>

          <div className=' my-14'>
            <a href="https://github.com/YinkTech"> <i className='me-3 bi bi-github rounded-full text-white px-2.5 py-1 border-4 border-[#018bed] bg-[#018bed]' style={{fontSize: '35px'}}></i></a>
            <a href="https://www.linkedin.com/in/yinktech/"> <i className=' bi bi-linkedin text-[#018bed]' style={{fontSize: '35px'}}></i></a>
            <a href="mailto:layink4dat@gmail.com"> <i className='ms-3 bi bi-envelope-at text-[#018bed]' style={{fontSize: '35px'}}></i></a>
          </div>

          
          
        </div>
        <div className='md:w-[50%]' 
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
        data-aos="flip-right" >
          <img src={AiImg} alt="AiImg" className='hidden sm:block ' style={{width: 'auto', height: 'auto'}} />
        </div>
      </div>
    </div>
  )
}

export default Main;