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
              I first became thrilled with Software engineering in 2019. I was with a friend and he
              was telling me about this thing called Python and how it could automate things.
              As a person who looks for efficiencies, I was hooked and asked him questions
              about how I could get started. My friend told me it would be best if I start learning
              the basics of frontend languages before getting into backend development. I
              jumped right into HTML & CSS. Soon I was building cool frontend projects. I also
              added javaScript to sharpen my frontend skills.
            </span>
            <span>
              I'm currently seeking a full-time role in Software Engineering, Frontend Engineering
              and any other related fields where I can contribute my skills both in coding and
              business to help a company achieve their goals.
            </span>
        </div>
      </div>
    </div>
  )
}

export default About