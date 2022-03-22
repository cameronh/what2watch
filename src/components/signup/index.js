import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = ({ onSignup }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <section className="flex w-full mx-6 sm:w-[30rem] flex-col space-y-10">
      <div className="text-center text-4xl font-medium">Sign Up</div>
      <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input
          type="text"
          className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          name="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>

      <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input
          type="email"
          className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input
          type="password"
          className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input
          type="password"
          className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
      </div>

      <button
        className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
        onClick={() => onSignup({ fullName, email, password, confirmPassword })}
      >
        Create Account
      </button>

      <div className="text-center text-lg">
        Already have an account?{' '}
        <p className="inline font-medium text-indigo-500 underline-offset-4 hover:underline">
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
