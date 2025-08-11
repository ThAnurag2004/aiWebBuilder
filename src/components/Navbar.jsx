import React from 'react'
import Switcher13 from './Switcher13'

function Navbar() {
  return (
    <div className='w-full p-4 flex justify-between'>
        <div className='text-4xl font-bold dark:text-teal-300'>UI<span className='dark:text-orange-500'>Gen</span></div>
        <div>
          <Switcher13 />
        </div>
    </div>
  )
}

export default Navbar
