import { useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";
import PostItem from "./PostItem/PostItem";
import PostSearch from "./PostSearch";

const PostScreen = () => {
    
    const {posts} = useContext(PostContext)

    return (
        <>
            <hr className="mb-4" />
            <PostSearch />
            
            <section className="container row d-flex justify-content-between">
                {
                    posts.map((post) => {
                        return (
                            <PostItem key={post.id} id = {post.id} url = {post.url} title = {post.title} description = {post.description} tags = {post.tags}/>
                        )
                    })
                }
            </section></>

    )
}

export default PostScreen