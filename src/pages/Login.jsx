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
      className="flex justify-center h-screen bg-no-repret bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="my-auto p-4 w-96 rounded-lg bg-black bg-opacity-20">
        <h1 className="text-2xl my-8 text-hawkes-blue-500 text-center">
          Login
        </h1>
        <form className="py-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mx-auto w-fit">
            <label className="text-sm text-hawkes-blue-500">Username</label>
            <input
              type="text"
              className="forms mt-0.5"
              {...register('username', {
                required: 'Enter Username',
                pattern: {
                  message: 'Not A Valid Username',
                },
              })}
            />
            <span className="text-red-700 w-fit mx-auto">
              {errors?.username && errors.username.message}
            </span>
          </div>
          <div className="flex flex-col mx-auto w-fit">
            <label className="text-sm text-hawkes-blue-500">Password</label>
            <input
              type="password"
              name="password"
              className="forms mt-0.5"
              {...register('password', {
                required: 'Required',
                pattern: {
                  message: 'Enter Password',
                },
              })}
            />
            <span className="text-red-700 w-fit mx-auto">
              {errors?.password && errors.password.message}
            </span>
          </div>
          <div className="flex flex-col mx-auto w-fit">
            <button className="btn mt-6 ">Login</button>
            <p className="mt-5 text-xs mb-1 text-hawkes-blue-500">
              Don't have an account?
            </p>
            <button className="btn" type="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
