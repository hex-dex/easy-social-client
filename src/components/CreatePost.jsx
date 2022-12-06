import React, { useState } from 'react';
import { IoCreate } from 'react-icons/io5';
import UserIcon from './ui/UserIcon';

const CreatePost = ({ createPost, user }) => {
  const [text, setText] = useState('');
  // console.log(createPost);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') return;

    const post = {
      post_content: text,
      source_id: user.id,
    };
    createPost(post);
  };

  return (
    <div className="bg-container h-18 rounded-2xl flex text-primary p-4 ">
      <UserIcon size={36} />
      <div className="flex-1 ml-4 relative flex bg-content rounded-lg p-1 items-center focus-within:outline outline-slate-400">
        <input
          placeholder="Create a post..."
          className="w-full h-full rounded-lg px-2 text-screen placeholder:text-container bg-inherit focus-visible:outline-none"
          value={text}
          onChange={handleChange}
        />
        <div className="bg-inherit rounded-r-lg">
          <button
            className="text-screen bg-cover p-1 rounded-lg h-fit cursor-pointer"
            onClick={onSubmit}
          >
            <IoCreate size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
