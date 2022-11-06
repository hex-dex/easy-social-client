import React from 'react'
import background from '../assets/sky.jpg';

const Register = () => {
  return (
    <div
    className='center h-screen bg-no-repeat bg-cover'
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className='my-auto  w-96 rounded-lg bg-black bg-opacity-20 pb-4' >
      <h1 className='text-2xl mt-10 mb-3 text-hawkes-blue-500 text-center'>
        Register
      </h1>
      <form className='flex flex-col'>
        <label className=' ml-20 mt-3 text-sm text-hawkes-blue-500'>
          First Name
        </label>
        <div className='center'>
          <input type='text' className='forms mt-0.5' />
        </div>
        <label className=' ml-20 mt-3 text-sm text-hawkes-blue-500'>
          Last Name
        </label>
        <div className='center'>
          <input type='text' className='forms mt-0.5' />
        </div>
        <label className=' ml-20 mt-3 text-sm text-hawkes-blue-500'>
          Username
        </label>
        <div className='center'>
          <input type='text' className='forms mt-0.5' />
        </div>
        <label className=' ml-20 mt-3 text-sm text-hawkes-blue-500'>
          Password
        </label>
        <div className='center'>
          <input type='password' className='forms mt-0.5 ' />
        </div>
        <div className='center'>
          <button className='btn mt-6 '>Login</button>
          <p className='mt-7 text-xs mb-1 text-hawkes-blue-500'>
            Forgotten Password
          </p>
          <button className='btn'>Register</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register