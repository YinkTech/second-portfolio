import React from 'react'
import { PortfolioData } from './Data'

const Portfolio = () => {
  return (
    <div 
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
        data-aos="zoom-up"
        className='bg-[#fff] py-20'
      >
      <div className='px-2 sm:px-[100px] md:py-9' style={{fontFamily: 'brasley-medium'}}>
        <h3 className=' text-[#008dea] md:text-6xl text-3xl font-bold uppercase text-center p-9'>Portfolio</h3>

        <div className='lg:grid lg:grid-cols-2 ' style={{columnGap: '5rem'}}>

          {PortfolioData.map((data, id) => {
            return (
              <div className='p-3 py-5  sm:p-12 sm:py-12 mb-20' key={id} style={{boxShadow: 'rgb(230 230 230) 1px 5px 15px 5px ', borderRadius: '50px 50px'}}
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
              data-aos="zoom-in">
                <div>
                  <img src={data.img} alt={data.img} className=' w-auto rounded'  style={{ borderRadius: '20px 20px'}}/>
                </div>
                <div className='mt-10'>
                  <h4 className='text-[#038af4] text-xl md:text-5xl font-bold mb-5'>{data.name}</h4>
                  <span className='text-[#39434a] sm:text-xl font-semibold' style={{fontFamily: 'brasley-regular'}}>
                    {data.details}
                  </span>
                  <div className='p-4'>
                    <a className='pe-2 text-[#038af4]' href=''>Github <i className='bi bi-github ms-3'></i></a>
                    <b>|</b>
                    <a className=' ps-2  text-[#038af4]' href=''>Live <i className='bi bi-box-arrow-up-right ms-3'></i></a>
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio