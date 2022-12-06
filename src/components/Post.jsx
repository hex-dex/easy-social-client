import React, { useEffect, useRef, useState } from 'react';
import UserIcon from './ui/UserIcon';

const ToolTip = ({ source_id }) => {
  return (
    <div className="absolute bg-secondary bg-opacity-20 text-primary h-fit w-fit z-50">
      {source_id}
    </div>
  );
};

const Post = ({ source_id, post_content, key }) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.addEventListener('mouseover', () => setIsHover(true));
    ref.current.addEventListener('mouseout', () => setIsHover(false));
  }, []);
  return (
    <div className="bg-cover w-full h-32 my-4 rounded-xl p-2 flex" key={key}>
      <div className="text-primary mr-2 flex flex-col justify-start items-center w-1/6">
        <UserIcon />
        <div className="relative w-full">
          <div
            className="font-bold my-2 p-1 w-full text-center truncate "
            ref={ref}
          >
            {source_id}
          </div>
          {isHover && <ToolTip source_id={source_id} />}
        </div>
      </div>
      <div className="flex-1 bg-content bg-opacity-30 text-secondary p-1 rounded-xl w-5/6 ">
        <p>{post_content}</p>
      </div>
    </div>
  );
};

export default Post;
