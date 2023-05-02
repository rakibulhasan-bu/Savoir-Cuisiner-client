// import React from 'react';

import { FaEye, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="container mx-auto py-8 md:pb-28 md:pt-16">
      <section className="flex h-[90vh] flex-col items-center md:flex-row-reverse md:rounded-3xl md:bg-white md:shadow-md">
        <div className="hidden h-full w-full md:w-1/2 lg:block">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="h-full w-full object-cover md:rounded-e-3xl"
          />
        </div>

        <div
          className="flex  w-full items-center justify-center px-6 md:mx-auto md:w-1/2 md:max-w-md md:px-16
        lg:max-w-full xl:w-1/2 xl:px-20"
        >
          <div className="h-100 w-full">
            <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">
              Log in to your account
            </h1>

            <form className="my-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="relative mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  className="mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                />
                <span className="absolute end-0 cursor-pointer pr-4 pt-6 text-xl text-gray-800">
                  <FaEye />
                </span>
              </div>

              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="mt-6 block w-full rounded-lg bg-indigo-500 px-4 py-3 font-semibold
              text-white hover:bg-indigo-400 focus:bg-indigo-400"
              >
                Register
              </button>
            </form>

            {/* <hr className="my-6 border-gray-300 w-full" > */}

            <button
              type="button"
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-900 hover:bg-Gray focus:bg-gray-100"
            >
              <div className="flex items-center justify-center">
                <FaGoogle className="text-xl" />
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8">
              Need an account?{" "}
              <a
                href="#"
                className="font-semibold text-blue-500 hover:text-blue-700"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
