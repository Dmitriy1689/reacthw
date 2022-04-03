import { useState } from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem/PostItem";

const PostScreen = () => {
    
    const posts = useSelector(store => store.posts)

    const [searchInput, setSearchInput] = useState("");
  
    const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
    })

  const changeInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

    return (
        <>
            <hr className="mb-4" />
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
            
            <section className="container row d-flex justify-content-between">
                {
                    filteredPosts.map((post) => {
                        return (
                            <PostItem key={post.id} id = {post.id} url = {post.url} title = {post.title} description = {post.description} tags = {post.tags}/>
                        )
                    })
                }
            </section>
        </>

    )
}

export default PostScreen