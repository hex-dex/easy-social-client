import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';

const UserIcon = ({ size = 42 }) => {
  return (
    <div className="p-1 bg-secondary opacity-60 rounded-lg">
      <HiOutlineUserCircle size={size} />
    </div>
  );
};

export default UserIcon;
