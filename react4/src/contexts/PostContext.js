/*import { createContext, useEffect, useState } from "react";
const PostContext = createContext();
const LSPostkey = "post";
const PostProvider = ({ children }) => {
  
  
 const postInitialStatement = () => {
    const dataFromLS = localStorage.getItem(LSPostkey);

    return JSON.parse(dataFromLS) || [];
  }

  const [posts, setPosts] = useState(postInitialStatement);

 useEffect(() => {
    const dataFromLS = localStorage.getItem(LSPostkey);
    if (dataFromLS) {
      setPosts(JSON.parse(dataFromLS));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LSPostkey, JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider
      value={{
        LSPostkey,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
export { PostContext };*/
