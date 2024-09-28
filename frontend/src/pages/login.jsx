import React from 'react';
import loginSvg from '../../public/Group.png';

function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-400 to-indigo-600 animate-gradient-x">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl p-8 bg-white rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105">
        {/* Illustration Section */}
        <div className="hidden md:block w-1/2">
          <img 
            src={loginSvg} 
            alt="Login Illustration" 
            className="w-full h-auto animate-fade-in-up hover:animate-pulse transition duration-500 ease-in-out" 
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8 animate-slide-in">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800" style={{ fontFamily: 'PT Serif Caption' }}>
            <span className="block">Hello</span>
            <span className="block text-indigo-600">Welcome Back!</span>
          </h1>

          <form className="flex flex-col space-y-6">
            {/* Username Input */}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-transform transform duration-300 ease-in-out hover:scale-105"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-transform transform duration-300 ease-in-out hover:scale-105"
            />

            {/* Remember me & Forgot Password */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="keepLoggedIn"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-transform transform hover:scale-110"
                />
                <label htmlFor="keepLoggedIn" className="ml-2 text-sm text-gray-600">
                  Keep me logged in
                </label>
              </div>
              <a href="#" className="text-sm text-indigo-600 hover:underline hover:text-indigo-800 transition-colors duration-200">Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-500 ease-in-out transform hover:scale-105"
            >
              Log In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account? <a href="#" className="text-indigo-600 font-semibold hover:underline hover:text-indigo-800 transition-colors duration-200">Sign up</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
