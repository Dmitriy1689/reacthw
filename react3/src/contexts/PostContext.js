import { createContext, useEffect, useState } from "react";
const PostContext = createContext();
const LSPostkey = "post";
const PostProvider = ({ children }) => {
  const [backUpPosts, setBackUpPosts] = useState([]);
  const [posts, setPosts] = useState(() => {
    const dataFromLS = localStorage.getItem(LSPostkey);

    return JSON.parse(dataFromLS) || [];
  });

  const addNewPost = (url, title, description, tags, id) => {
    setPosts((prev) => [
      ...prev,
      {
        url,
        title,
        description,
        tags,
        id: Date.now(),
      },
    ]);
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((prevPost) => prevPost.id !== id));
  };

  const deleteAllPosts = () => {
    setPosts([]);
  };

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSPostkey);
    if (dataFromLS) {
      setPosts(JSON.parse(dataFromLS));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LSPostkey, JSON.stringify(posts));
    setBackUpPosts(posts)
  }, [posts]);

  console.log(backUpPosts);

  return (
    <PostContext.Provider
      value={{
        backUpPosts,
        posts,
        addNewPost,
        deletePost,
        deleteAllPosts,
        setPosts,
        LSPostkey,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
export { PostContext };
