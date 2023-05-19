import React from 'react'

const About = () => {
  return (
    <div 
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
        data-aos="fade-up"
        className='bg-[#fff] about-item'
      >
      <div className='px-2 sm:px-[100px] md:py-9' style={{fontFamily: 'brasley-medium'}}>
        <h3 className=' text-[#008dea] md:text-6xl text-3xl font-bold uppercase text-center p-9'>About</h3>
        <div className='bg-[#f4f5f7c0] py-10 md:text-xl  lg:text-4xl text-center shadow-sm text-[#5d656b] flex flex-col md:py-28 md:px-20 aboutus-div'>
            <span className='mb-9'>
            I am a skilled software developer with expertise in multiple platforms for building websites and web applications.
            I am an avid reader with a strong work ethic.
             </span>
            <span>
            Through my experience in the field, I have developed a strong understanding of the development process and the ability to deliver high-quality solutions. My portfolio showcases a selection of my work and demonstrates my technical skills and experience. I am excited to use my skills to help bring your ideas to life.
            </span>
        </div>
      </div>
    </div>
  )
}

export default About