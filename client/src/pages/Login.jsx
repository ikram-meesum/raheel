import React from "react";

export default function Login() {
  return (
    <>
      {/* <!-- component --> */}
      {/* <!-- component --> */}
      <div className="bg-sky-50 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2 h-screen hidden bg-black lg:block">
          <div className="mt-56">
            <h2 className="text-5xl text-center font-bold uppercase">
              <span className="bg-gradient-to-r from-pink-400 to-teal-300 via-purple-300 bg-clip-text text-transparent">
                no stack to
              </span>
            </h2>
            <h2 className="text-5xl text-center font-bold uppercase">
              <span className="bg-gradient-to-r from-pink-400 to-teal-300 via-purple-300 bg-clip-text text-transparent">
                fullstack developer
              </span>
            </h2>
          </div>
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          {/* NEW FORM */}

          <div className="w-72">
            {/* <!-- Heading --> */}
            <h1 className="text-2xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">
              Please enter your valid login credentials
            </small>

            {/* <!-- Form --> */}
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">
                  Valid Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1.5 px-2 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1.5 px-2 text-gray-500"
                />
              </div>

              <div className="mb-3 mt-5">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  Sign in
                </button>
              </div>
            </form>

            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Don't have an account?
              </span>
              <a href="#" className="text-xs font-semibold text-purple-700">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
