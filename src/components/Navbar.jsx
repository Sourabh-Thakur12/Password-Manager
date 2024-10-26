import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-slate-500 text-white'>
        <div className="mycontainer items-center flex justify-between px-4 py-5 h-14">
          <div className='logo font-bold text-white'>
            <span className='text-green-700'>&lt;</span>
            Pass
            <span className='text-green-700'>MANAGER/&gt;</span>
          </div>
          <ul>
            <li className='flex gap-4'>
              <a className='hover:font-bold ' href='/'>Home</a>
              <a className='hover:font-bold ' href='#'>Contact</a>
              <a className='hover:font-bold ' href='#'>About us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
