import React from 'react';
import { IoCreate } from 'react-icons/io5';
import UserIcon from './ui/UserIcon';
const CreatePost = () => {
  return (
    <div className="bg-container h-18 rounded-2xl flex text-primary p-4 ">
      <UserIcon size={36} />
      <div className="flex-1 ml-4 relative flex bg-content rounded-lg p-1 items-center focus-within:outline outline-slate-400">
        <input
          placeholder="Create a post..."
          className="w-full h-full rounded-lg px-2 text-screen placeholder:text-container bg-inherit focus-visible:outline-none"
        />
        <div className="bg-inherit rounded-r-lg">
          <div className="text-screen bg-cover p-1 rounded-lg h-fit cursor-pointer">
            <IoCreate size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
