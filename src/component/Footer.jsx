import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 md:text-center text-[#465058]' style={{fontFamily: 'widy'}}
    data-aos-duration="500"
    data-aos-delay="300"
    data-aos-easing="ease-in-out"
    data-aos="fade-zoom-in"
    >
      <h3 className='text-[#008dea] text-4xl p-5'>YinkTech</h3>

      <div className='sm:flex sm:justify-center text-xl font-extrabold p-2 px-9' style={{columnGap: '2rem', listStyle: 'none'}}>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Testimonia</li>
      </div>

      <div className=' my-14 mx-5'>
        <a href="https://github.com/YinkTech"> <i className='me-3 bi bi-github rounded-full text-white bg-[#018bed]' style={{fontSize: '35px'}}></i></a>
        <a href="https://www.linkedin.com/in/yinktech/"> <i className=' bi bi-linkedin text-[#018bed]' style={{fontSize: '35px'}}></i></a>
        <a href="mailto:layink4dat@gmail.com"> <i className='ms-3 bi bi-envelope-at text-[#018bed]' style={{fontSize: '35px'}}></i></a>
      </div>

      <div className='mx-5 text-sm sm:text-4xl font-bold' >
        <span>
          &copy;YinkTech All Right Reserved.
        </span>
      </div>
    </div>
  )
}

export default Footer