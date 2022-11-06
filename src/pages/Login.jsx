import React from 'react';
import { useForm } from 'react-hook-form';
import background from '../assets/sky.jpg';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <div
      className='center h-screen bg-no-repret bg-cover'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='mt-60 h-96 w-96 rounded-lg bg-black bg-opacity-20'>
        <h1 className='text-2xl mt-10 mb-3 text-hawkes-blue-500 text-center'>
          Login
        </h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <label className=' ml-20 mt-3 text-sm text-hawkes-blue-500'>
            Username
          </label>
          <div className='center'>
            <input
              type='email'
              className='forms mt-0.5'
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Not A Valid Email Address',
                },
              })}
            />
            {errors.email && errors.email.message}
          </div>
          <label className=' ml-20 mt-3 text-sm text-hawkes-blue-500'>
            Password
          </label>
          <div className='center'>
            <input type='password' className='forms mt-0.5' />
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
  );
};

export default Login;
