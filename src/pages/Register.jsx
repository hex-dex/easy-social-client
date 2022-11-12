import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormAction } from 'react-router-dom';
import background from '../assets/sky.jpg';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <div
      className="flex justify-center h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="my-auto  w-96 rounded-lg bg-black bg-opacity-20 pb-4">
        <h1 className="text-2xl my-8 text-hawkes-blue-500 text-center">
          Register
        </h1>
        <form className="py-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mx-auto w-fit">
            <label className="text-sm text-hawkes-blue-500">First Name</label>
            <input
              type="text"
              className="forms"
              {...register('first_name', {
                required: 'Enter First Name',
                pattern: {
                  message: 'Not A First Name',
                },
              })}
            />
            <span className="text-red-700 h-6  w-fit mx-auto">
              {errors?.first_name && errors.first_name.message}
            </span>
          </div>
          <div className="flex flex-col mx-auto w-fit">
            <label className="text-sm text-hawkes-blue-500">Last Name</label>
            <input
              type="text"
              className="forms"
              {...register('last_name', {
                required: 'Enter Last Name',
                pattern: {
                  message: 'Not A Valid Last Name',
                },
              })}
            />
            <span className="text-red-700 h-6 w-fit mx-auto">
              {errors?.last_name && errors.last_name.message}
            </span>
          </div>
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
            <button className="btn mt-6">Register</button>
            <p className="mt-7 text-xs mb-1 text-hawkes-blue-500">
              Already have an account?
            </p>
            <button type="button" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
