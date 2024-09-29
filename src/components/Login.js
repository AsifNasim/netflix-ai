import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validateData } from '../utils/validate'
import { createUser, loginUser } from '../utils/authenticate'
/**
 * Represents the login component.
 * @component
 */
/**
 * Represents the login component.
 * @returns {JSX.Element} The login component JSX.
 */
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage , setErrorMessage] = useState(null);

  const userName = useRef("");
  const email = useRef(null);
  const password = useRef(null);

  const validateFormData = () => {
    const message = validateData(userName.current.value, email.current.value, password.current.value);
    console.log("message -- > ", message);
    setErrorMessage(message);

    signupUser(email.current.value, password.current.value)
    signInUser(email.current.value, password.current.value)

    if(message !== null){
      if(!isSignInForm){
        signupUser(email.current.value, password.current.value)
      }      
      else if(isSignInForm)
      {
        signInUser(email.current.value, password.current.value)
      }
    }
  }

  const signupUser = (email, password) => {
    console.log("sign up email and password -->", email, password)
    createUser(email ,password);
  }

  const signInUser = (email, password) => {
    console.log("sign in email and password -->", email, password)
    loginUser(email ,password);
  }

  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div
        className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg')] 
         bg-cover absolute bg-center h-screen w-screen"
      ></div>

      <form onSubmit={ (e)=> {
        e.preventDefault();
      }} className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-h-[90vh] overflow-y-auto p-8 sm:p-12 bg-black bg-opacity-80 my-20 mx-auto absolute right-0 left-0 rounded-md">
        <label className="text-white block mx-2 my-4 text-lg sm:text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </label>
        {!isSignInForm && (
            <input
              type="text"
              ref={userName}
              placeholder="Full Name"
              className="text-white px-3 py-2 m-2 bg-gray-700 border border-black rounded-md w-full"
            />
            
        
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="text-white px-3 py-2 m-2 bg-gray-700 border border-black rounded-md w-full"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="text-white px-3 py-2 bg-gray-700 border m-2 border-black rounded-md w-full"
        />
        <button onClick={validateFormData} className="border border-black rounded-md px-4 py-2 mx-2 my-4 bg-red-700 text-white w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
          {/* {isSignInForm */}
        </button>

        <p className="text-lg text-bold text-red-500 flex justify-start mb-1 pl-4">{errorMessage}
        </p>

        <p className="px-2">
          {isSignInForm ? (
            <Link
              onClick={handleToggle}
              className="text-customGrey  ml-2"
              to="/"
            >
              New to Netflix?{" "}
              <span className="text-white hover:underline">Sign up now</span>
            </Link>
          ) : (
            <Link
              onClick={handleToggle}
              className="text-customGrey  ml-2"
              to="/"
            >
              Already a member?{" "}
              <span className="text-white hover:underline">Sign in now</span>
            </Link>
          )}
        </p>

        {!isSignInForm && 
        <div className="px-4">
        <div className="mt-4">
          <p className="text-customGrey text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Learn more
            </a>
          </p>
        </div>

        <div className="mt-4">
          <p className="text-customGrey text-sm">
            The information collected by Google reCAPTCHA is subject to the
            Google{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Terms of Service
            </a>
            , and is used for providing, maintaining, and improving the
            reCAPTCHA service and for general security purposes.
          </p>
        </div>

        {isSignInForm && (
          <div className="mt-4">
            <a href="/" className="text-customGrey text-sm hover:underline">
              Forgot password?
            </a>
          </div>
        )}

        <div className="mt-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-red-700" />
            <span className="ml-2 text-customGrey text-sm">Remember me</span>
          </label>
        </div>

        <div className="mt-4">
          <p className="text-customGrey text-sm">
            Need help? Visit our{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Help Center
            </a>
          </p>
        </div>
      </div>}
      </form>
    </div>
  );
};

export default Login;
