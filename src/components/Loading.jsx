import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center items-center w-full md:h-full h-screen border-2 rounded-xl'>
        <div class="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>
    </div>
  )
}

export default Loading
