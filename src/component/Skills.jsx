import React from 'react'
import { SkillData, SkillData2 } from './Data';

const Skills = () => {
  return (
    <div className='bg-[#fff] py-20'
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
        data-aos="fade-down"
    >
      <div className='px-2 sm:px-[100px] py-9' style={{fontFamily: 'brasley-medium'}}>
        <h3 className=' text-[#008dea] md:text-6xl text-3xl font-bold uppercase text-center p-9'>Skills</h3>
         <div className='grid md:grid-flow-col' style={{columnGap: '10rem'}}>
            <div className=''>
              <h5 className='font-bold text-xl md:text-2xl mb-5'>Frontend Development</h5>
              {SkillData.map((datas, id) => {
                return (
                  <div key={id}>
                    <div className='flex justify-between font-bold text-xl md:text-3xl my-4 mt-7'>
                      <span className='text-[#008aee]'>{datas.skill}</span>
                      <span>{datas.percent}</span>
                    </div>

                    <div class="progress">
                      <div class="progress-bar" style={{width: `${datas.percent}`}}></div>
                    </div>
                  </div>
                )
              })} 
            </div>

          
            <div className=' mt-14 md:mt-0'>
              <h5 className='font-bold text-xl md:text-2xl mb-5'>Backend Development</h5>
              {SkillData2.map((items, id) => {
                return (
                  <div key={id}>
                    <div className='flex justify-between font-bold text-xl md:text-3xl my-4 mt-7'>
                      <span className='text-[#008aee]'>{items.skill}</span>
                      <span>{items.percent}</span>
                    </div>

                    <div class="progress">
                      <div class="progress-bar" style={{width: `${items.percent}`}}></div>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;