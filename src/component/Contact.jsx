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
        <h3 className=' text-[#008dea] mb-9 md:text-6xl text-3xl font-bold uppercase text-center p-9'>Contact </h3>
          <div className='lg:grid lg:grid-cols-2 ' style={{columnGap: '5rem'}}>
            <div>
              <div className=' rounded-3xl p-4 flex flex-col mb-16 py-9 text-[#898f93] text-center ' style={{boxShadow: 'rgb(230 230 230) 1px 3px 5px 5px '}}>
                <i className='bi bi-envelope-at font-bold text-5xl text-[#008dea]'></i>
                <span className='font-bold text-lg md:text-2xl text-[#6b7477]  my-3'> Email</span>
                <span className=' font-medium text-lg md:text-2xl'> Layinka4dat@gmail.com</span>
                <a href="mailto:Layinka4dat@gmail.com"><span className='text-[#008dea] text-lg md:text-2xl'> Write to me <i className='bi bi-box-arrow-up-right mx-3'></i> </span></a>
              </div>

              <div className=' rounded-3xl p-4 flex flex-col mb-16 py-9 text-[#898f93] text-center ' style={{boxShadow: 'rgb(230 230 230) 1px 3px 5px 5px '}}>
                <i className='bi bi-telephone font-bold text-5xl text-[#008dea]'></i>
                <span className='font-bold my-3 text-lg md:text-2xl text-[#6b7477]'> Mobile </span>
                <span className=' font-medium text-lg md:text-2xl'> YinkTech</span>
                <a href="tel:+23469632934"> <span className='text-[#008dea] text-lg md:text-2xl'> Call or Message me <i className='bi bi-box-arrow-up-right mx-3'></i> </span></a>
              </div>

              <div className=' rounded-3xl p-4 flex flex-col mb-16 py-9 text-[#898f93] text-center ' style={{boxShadow: 'rgb(230 230 230) 1px 3px 5px 5px '}}>
                <i className='bi bi-whatsapp font-bold text-5xl text-[#008dea]'></i>
                <span className='font-bold my-3 text-lg md:text-2xl text-[#6b7477]'> WhatsApp </span>
                <span className=' font-medium text-lg md:text-2xl'> YinkTech</span>
                <a href="https://wa.link/ch1x9p"> <span className='text-[#008dea] text-lg md:text-2xl'> Call or Message me <i className='bi bi-box-arrow-up-right mx-3'></i> </span> </a>
              </div>
            </div>
            <div>
              <form action="" className=' pb-44'>
                <fieldset className=' border-2 border-[#64b7f2] block mb-10'>
                  <legend className='text-2xl px-2 font-thin  text-[#616161]'>Name</legend>
                  <input type="text" placeholder='Eg: Love Modeyin Gift' className=' font-thin'/>
                </fieldset>

                
                <fieldset className=' border-2 border-[#64b7f2] block mb-10'>
                  <legend className='text-2xl px-2 font-thin  text-[#616161]'>Email</legend>
                  <input type="email" placeholder='yourname@example.com' className=' font-thin'/>
                </fieldset>


                
                <fieldset className=' border-2 border-[#64b7f2] block mb-10'>
                  <legend className='text-2xl px-2 font-thin  text-[#616161]'>Project</legend>
                  <textarea name="project" className=' font-thin' id="project" placeholder='Short Note' rows="13"></textarea>
                </fieldset>

                
                <button className='bg-[#018bed] p-3 text-white me-5 text-2xl font-bold rounded-xl hover:bg-white hover:text-[#018bed] ease-out duration-150 hover:border-2 hover:border-[#018bed] shadow-lg m-2'> Send Message </button>

              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact