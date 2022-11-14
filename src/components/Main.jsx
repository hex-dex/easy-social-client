import React from 'react';

const MainSelection = () => {
  return (
    <div className="my-4 flex justify-between w-full">
      <div className="bg-container w-1/2 h-12 rounded-2xl mr-2"></div>
      <div className="bg-container w-1/2 h-12 rounded-2xl ml-2"></div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="h-full flex flex-col flex-shrink-0 w-96 mx-2">
      <div className="bg-container h-16 rounded-2xl"></div>
      <MainSelection />
      <div className="bg-container flex-auto rounded-2xl"></div>
    </div>
  );
};

export default Main;
