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
      <div className='my-auto p-4 w-96 rounded-lg bg-black bg-opacity-20'>
        <h1 className='text-2xl mt-5 mb-3 text-hawkes-blue-500 text-center'>
          Login
        </h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <label className=' ml-20 mt-3 text-sm text-hawkes-blue-500'>
            Username
          </label>
          <div className='center'>
            <input
              type='text'
              className='forms mt-0.5'
              {...register('text', {
                required: 'Enter Username',
                pattern: {
                  message: 'Not A Valid Username',
                },
              })}
            />
            <span className='text-red-700'>
              {errors?.text && errors.text.message}
            </span>
          </div>
          <label className=' ml-20 mt-3 text-sm text-hawkes-blue-500'>
            Password
          </label>
          <div className='center'>
            <input
              type='password'
              name='password'
              className='forms mt-0.5'
              {...register('password', {
                required: 'Required',
                pattern: {
                  message: 'Enter Password',
                },
              })}
            />
            <span className='text-red-700'>
              {errors?.password && errors.password.message}
            </span>
          </div>
          <div className='center'>
            <button className='btn mt-6 '>Login</button>
            <p className='mt-5 text-xs mb-1 text-hawkes-blue-500'>
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
