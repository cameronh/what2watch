import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar';

const App = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar user={user} />
    </div>
  );
};

export default App;
