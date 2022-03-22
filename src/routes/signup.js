import React, { useEffect } from 'react';
import SignupForm from '../components/signup';
import { useDispatch, useSelector } from 'react-redux';
import { signupEmailPassword } from '../store/user';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user]);

  const handleSignup = async ({
    fullName,
    email,
    password,
    confirmPassword,
  }) => {
    dispatch(signupEmailPassword({ email, password }));
  };
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      {!user ? <SignupForm onSignup={handleSignup} /> : null}
    </main>
  );
};

export default Signup;
