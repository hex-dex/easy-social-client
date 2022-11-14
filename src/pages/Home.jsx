import React from 'react';
import Main from '../components/Main';
import authUser from '../hooks/authUser';

const Home = () => {
  const user = authUser();

  return (
    <div className="bg-screen h-screen flex justify-center py-4">
      <div className="bg-container h-96 w-80 mx-2 rounded-2xl"></div>
      <Main />
      <div className="bg-container h-96 w-80 mx-2 rounded-2xl"></div>
    </div>
  );
};

export default Home;
