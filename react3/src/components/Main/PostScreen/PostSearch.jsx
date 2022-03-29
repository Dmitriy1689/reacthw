import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";

const PostSearch = () => {
  const { setPosts, backUpPosts, setBackUpPosts, posts, LSPostkey} = useContext(PostContext);

  const [searchInput, setSearchInput] = useState("");
  
  useEffect(() => {
    const searchRegExp = new RegExp(searchInput, "i");
    if (searchInput) {
      setBackUpPosts(posts)
      setPosts((prev) => prev.filter((post) => searchRegExp.test(post.title)));
    } else {
      setPosts(backUpPosts);
      localStorage.setItem(LSPostkey, JSON.stringify(posts))
    }
  }, [searchInput]);

  useEffect(() => {
    setPosts(backUpPosts);
    localStorage.setItem(LSPostkey, JSON.stringify(posts))
  }, [])

  const changeInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  console.log(backUpPosts);

  return (
    <form className="d-flex align-items-center flex-column">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <input
          type="text"
          className="form-control my-1"
          placeholder="Поиск по названию..."
          value={searchInput}
          onChange={changeInputHandler}
        />
      </div>
    </form>
  );
};

export default PostSearch;
