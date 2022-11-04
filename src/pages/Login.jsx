import React from 'react';

const Login = () => {
  return (
    <div className='center'>
      <div className='mt-60 h-80 w-80 rounded-lg border-2 border-red-900 text-center'>
        <h1 className='text-2xl mt-10'>Login</h1>
        <form className='center'>
          <input
            type='email'
            className='bg-custom-blue border-2 border-red-900'
          />
          <input type='password' className='border-2 border-red-900' />
          <button>Login</button>
          <p>Forgotten Password</p>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
