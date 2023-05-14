import React from 'react'

const Contact = () => {
  return (
    <div 
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
        data-aos="zoom-in-down"
        className='bg-[#fff] '
      >
      <div className='px-2 sm:px-[100px] md:py-9' style={{fontFamily: 'brasley-medium'}}>
        <h3 className=' text-[#008dea] md:text-6xl text-3xl font-bold uppercase text-center p-9'>Contact </h3>
          <div className='lg:grid lg:grid-cols-2 ' style={{columnGap: '5rem'}}>
            <div>
              <div className=' rounded-3xl p-4 flex flex-col mb-16 py-9 text-[#898f93] text-center ' style={{boxShadow: 'rgb(230 230 230) 1px 3px 5px 5px '}}>
                <i className='bi bi-envelope-at font-bold text-5xl text-[#008dea]'></i>
                <span className='font-bold text-lg md:text-3xl text-[#6b7477]  my-3'> Email</span>
                <span className=' font-medium text-lg md:text-3xl'> Layinka4dat@gmail.com</span>
                <a href="mailto:Layinka4dat@gmail.com"><span className='text-[#008dea] text-lg md:text-3xl'> Write to me <i className='bi bi-box-arrow-up-right mx-3'></i> </span></a>
              </div>

              <div className=' rounded-3xl p-4 flex flex-col mb-16 py-9 text-[#898f93] text-center ' style={{boxShadow: 'rgb(230 230 230) 1px 3px 5px 5px '}}>
                <i className='bi bi-telephone font-bold text-5xl text-[#008dea]'></i>
                <span className='font-bold my-3 text-lg md:text-3xl text-[#6b7477]'> Mobile </span>
                <span className=' font-medium text-lg md:text-3xl'> YinkTech</span>
                <a href="tel:+23469632934"> <span className='text-[#008dea] text-lg md:text-3xl'> Call or Message me <i className='bi bi-box-arrow-up-right mx-3'></i> </span></a>
              </div>
            </div>
            <div>
              <form action="">
                <legend>
                  <fieldset>Name</fieldset>
                  <input type="text" className='border'/>
                </legend>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact