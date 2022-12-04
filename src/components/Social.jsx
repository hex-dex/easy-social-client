import React, { useState } from 'react';
import UserIcon from '../components/ui/UserIcon';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Icon from '../components/ui/Icon';
import FriendsList from './FriendsList';

const AddFriend = () => {
  return (
    <div className="flex-1 relative flex bg-content rounded-lg p-1 items-center focus-within:outline outline-slate-400">
      <input
        placeholder="Add friend..."
        className="w-full h-full rounded-lg px-2 text-screen placeholder:text-container bg-inherit focus-visible:outline-none"
      />
      <div className="bg-inherit rounded-r-lg">
        <div className="text-screen bg-cover p-1 rounded-lg h-fit cursor-pointer hover:scale-100">
          <Icon className="ml-auto" icon={<AiOutlineUserAdd size={16} />} />
        </div>
      </div>
    </div>
  );
};

const Social = () => {
  const [chat, setChat] = useState('');

  const openChat = (friend_id) => {
    setChat(friend_id);
  };

  const closeChat = (friend_id) => {
    setChat('');
  };
  return (
    <div
      className="bg-container w-80 mx-2 rounded-2xl max-md:hidden "
      style={{ maxHeight: '48rem' }}
    >
      <div className="p-4 h-full flex flex-col ">
        <div className="bg-cover h-16 flex p-2 items-center justify-center rounded-lg mb-4">
          {!chat ? (
            <AddFriend />
          ) : (
            <div className="w-full h-full flex items-center">
              <UserIcon size={24} />
              <div className="px-4 text-primary">Adnan Ahmed</div>
            </div>
          )}
        </div>
        <div className="bg-cover h-auto p-2 items-center rounded-lg flex-grow overflow-auto">
          {!chat ? (
            <FriendsList openChat={openChat} />
          ) : (
            <FriendsList openChat={openChat} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Social;
