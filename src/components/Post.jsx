import React from 'react';
import UserIcon from './ui/UserIcon';

const Post = () => {
  return (
    <div className="bg-cover w-full h-32 my-4 rounded-xl p-2 flex">
      <div className="text-primary mr-2 flex flex-col justify-start items-center ">
        <UserIcon />
        <h1 className="font-bold my-2">TrueChainz</h1>
      </div>
      <div className="flex-1 bg-content bg-opacity-30 text-secondary p-1 rounded-xl">
        <p>Hey My name is adnan hehe</p>
      </div>
    </div>
  );
};

export default Post;
