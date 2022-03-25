import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/user';

const Logout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(logout());

      navigate('/', { replace: true });
    } else navigate('/', { replace: true });
  }, [user]);

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      {user && <h1>You have been signed out successfully.</h1>}
    </main>
  );
};

export default Logout;
