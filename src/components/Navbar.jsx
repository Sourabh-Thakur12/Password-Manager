import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-purple-200 items-center flex justify-between px-4'>
        <div className='font-bold'>logo</div>
      <ul>
        <li className='flex gap-4'>
            <a href='/'>Home</a>
            <a href='#'>Contact</a>
            <a href='#'>About us</a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
