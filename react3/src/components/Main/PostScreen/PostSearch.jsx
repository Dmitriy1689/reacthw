import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";

const PostSearch = () => {
  const { setPosts, backUpPosts } = useContext(PostContext);

  const [searchInput, setSearchInput] = useState("");

  console.log(backUpPosts);

  useEffect(() => {
    const searchRegExp = new RegExp(searchInput, "i");
    if (searchInput) {
      setPosts((prev) => prev.filter((post) => searchRegExp.test(post.title)));
    } else {
      setPosts(backUpPosts);
    }
  }, [searchInput]);

  const changeInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

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
