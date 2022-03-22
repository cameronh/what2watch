import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginEmailPassword } from '../store/user';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login';

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user]);

  const handleLogin = async ({ email, password }) => {
    dispatch(loginEmailPassword({ email, password }));
  };
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      {!user ? <LoginForm onLogin={handleLogin} /> : null}
    </main>
  );
};

export default Login;
