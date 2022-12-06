import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormAction, useNavigate } from 'react-router-dom';
import background from '../assets/sky.jpg';
import axios from 'axios';
import Cookies from 'js-cookie';
import { instance } from '../httpUtil';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await instance.post(`/user/register`, values);
      Cookies.set('access-token', response.data.accessToken);
      navigate('/');
    } catch (err) {
      setFormError(err.response.data.message);
    }

    // return values;
  };
  console.log(formError);
  return (
    <div className="flex justify-center h-screen bg-screen">
      <div className="my-auto  w-96 rounded-lg bg-black bg-opacity-20 pb-4">
        <h1 className="text-2xl my-8 text-hawkes-blue-500 text-center">
          Register
        </h1>
        <form className="py-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mx-auto w-fit">
            <label className="text-sm text-hawkes-blue-500">Username</label>
            <input
              type="text"
              className="forms"
              {...register('username', {
                required: 'Enter Username',
                pattern: {
                  message: 'Not A Valid Username',
                },
              })}
            />
            <span className="text-red-700 h-6 w-fit mx-auto">
              {errors?.username && errors.username.message}
            </span>
          </div>
          <div className="flex flex-col mx-auto w-fit">
            <label className="text-sm text-hawkes-blue-500">Email</label>
            <input
              type="email"
              className="forms"
              {...register('email', {
                required: 'Enter Email',
                pattern: {
                  message: 'Not A Valid Email',
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                },
              })}
            />
            <span className="text-red-700 h-6 w-fit mx-auto">
              {errors?.email && errors.email.message}
            </span>
          </div>
          <div className="flex flex-col mx-auto w-fit">
            <label className="text-sm text-hawkes-blue-500">Password</label>
            <input
              type="password"
              className="forms"
              {...register('password', {
                required: 'Enter Password',
                pattern: {
                  message: 'Not A Valid Password',
                },
              })}
            />
            <span className="text-red-700 h-6 w-fit mx-auto">
              {errors?.password && errors.password.message}
            </span>
          </div>
          <div className="flex flex-col mx-auto w-fit">
            <button className="btn mt-6" onClick={() => setFormError('')}>
              Register
            </button>
            <span className="text-red-700 h-6 w-fit mx-auto">
              {formError && formError}
            </span>
            <p className="mt-7 text-xs mb-1 text-hawkes-blue-500">
              Already have an account?
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
