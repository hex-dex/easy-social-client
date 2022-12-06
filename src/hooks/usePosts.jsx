import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { instance } from '../httpUtil';

const usePosts = (user) => {
  const [posts, setPosts] = useState([]);

  const createPost = async (post) => {
    try {
      const response = await instance.post('/post', {
        ...post,
        cookieValue: Cookies.get('access-token'),
      });
      console.log(response);
      setPosts([post, ...posts]);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  useEffect(() => {
    // FETCH POSTS FROM DATABASE all
    (async () => {
      try {
        const allPosts = await instance.get('/post');
        setPosts(allPosts.data.data);
      } catch (err) {
        console.log(`WHY, ${err}`);
      }
    })();
  }, []);

  return { posts, createPost };
};

export default usePosts;
