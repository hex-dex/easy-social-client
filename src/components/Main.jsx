import React from 'react';
import CreatePost from './CreatePost';

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
    <div
      className="h-full flex flex-col flex-shrink-0 mx-2 max-w-screen max-md:flex-shrink"
      style={{ width: '28rem' }}
    >
      <CreatePost />
      <MainSelection />
      <div className="bg-container flex-auto rounded-2xl p-4">
        <h1 className="text-primary mx-auto w-fit mb-4 text-2xl tracking-wide font-bold">
          Posts
        </h1>
      </div>
    </div>
  );
};

export default Main;
