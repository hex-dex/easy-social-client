import React from 'react';
import Main from '../components/Main';
import authUser from '../hooks/authUser';

const Home = () => {
  const user = authUser();

  return (
    <div className="bg-screen min-h-screen h-screen flex justify-center py-4">
      <div className="bg-container h-96 w-80 max-h-full mx-2 rounded-2xl max-md:hidden"></div>
      <Main />
      <div className="bg-container h-96 max-h-full w-80 mx-2 rounded-2xl max-lg:hidden"></div>
    </div>
  );
};

export default Home;
