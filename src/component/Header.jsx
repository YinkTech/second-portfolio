import React, { useState } from 'react'
import { Spiral as Hamburger } from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const menuClick = () => {
    setOpen(!isOpen);
  };

  const [sunOut, setSun] = useState('');
  const sunClick = () => {
    setSun('');
    setSun('-fill');
  };

  return (
    <div>
      <header className="App-header z-10 top-0">
        <nav className="navBar">
          <ul className='p-2 lg:p-5 lg:ps-[200px] flex justify-between lg:justify-center items-center cursor-pointer'>
            <div className={`${ isOpen ? ".navbar active" : ".navbar" } navbar bg-[#ff] flex items-center gap-[25px] flex-col py-[1em] font-bold lg:py-0 lg:flex-row absolute top-[-20em] left-0 lg:left-[0] w-[100%] lg:w-auto lg:bg-inherit lg:top-[0] lg:relative`}
              id="navbar" >
              <li className='text-primary text-base leading-[22px]'> Home </li>
              <li className='text-base leading-[22px]'> About </li>
              <li className='text-base leading-[22px]'> Skils </li>
              <li className='text-base leading-[22px]'> Portfolio </li>
            </div>
            
              <li onClick={sunClick} > <i className={`bi bi-brightness-high${sunOut}`}></i> </li>

              <li className=' inline lg:hidden' onClick={menuClick}><Hamburger toggled={isOpen} toggle={setOpen} /></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header