import React from 'react'
import logo from '../assets/images/logo.webp'

function Sidebar() {
  return (
    <div className='w-80 h-screen px-3 bg-gray-100 relative'>
        <div className='fixed top-0 mt-4'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="logo" className='w-4'/>
                <h1 className='font-bold'>New chat</h1>
            </div>
        </div>


        <div className='absolute bottom-0 flex flex-col px-1'>
            <h1 className='font-bold'>Sign up or log in</h1>
            <p className='text-[14px] text-gray-500'>Save your chat history, share chats, and personalize your experience.</p>
            <button className='mt-2 rounded-lg bg-green-700 p-2 text-white'>Sign up</button>
            <button className='mt-2 rounded-lg p-2 mb-3' style={{border: '1px solid gray'}}>Log in</button>
        </div>
    </div>
  )
}

export default Sidebar