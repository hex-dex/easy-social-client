import React from 'react';
import UserIcon from './ui/UserIcon';

const Friend = () => {
  return (
    <div className="p-2 flex bg-cover my-2 rounded-lg items-center">
      <UserIcon size={24} />
      <div className="mx-4 text-primary">Adnan Ahmed</div>
    </div>
  );
};

const FriendsList = () => {
  return (
    <React.Fragment>
      {' '}
      <div className="text-primary mx-auto w-fit my-2 text-2xl tracking-wide font-bold">
        Friends
      </div>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </React.Fragment>
  );
};

export default FriendsList;
