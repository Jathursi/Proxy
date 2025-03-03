import React from 'react'
import { Link } from 'react-router-dom';

function Topbar() {
  return (
      <nav className='w-full m-4 bg-transparent text-white'>
        <div className='flex flex-row justify-between items-center'>
          <div className='mx-5'>
            <Link to="/" className=''>
              <span className='text-2xl font-bold'>
                Proxy
              </span>
            </Link>
          </div>
          <div className='mx-10 flex justify-center items-center w-80' id=''>
            <div className='flex flex-row gap-5 justify-between items-center'>
              <a href='/' className=''>Home</a>
              <a href='/login' className=''>Login</a>
              <a href='/contact' className=''>Contact</a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Topbar
