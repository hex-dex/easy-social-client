import React from 'react';

const Icon = ({ icon, className }) => {
  return (
    <div
      className={`h-fit w-fit p-1 bg-secondary opacity-60 rounded-lg ${className}`}
    >
      {icon}
    </div>
  );
};

export default Icon;
