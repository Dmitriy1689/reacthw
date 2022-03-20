import { useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";
import PostItem from "./PostItem/PostItem";

const PostScreen = () => {
    
    const {posts} = useContext(PostContext)

    return (
        <section className="container row d-flex justify-content-between">
            {
                posts.map((post) => {
                    return (
                        <PostItem key={post.id} id = {post.id} url = {post.url} title = {post.title} description = {post.description} tags = {post.tags}/>
                    )
                })
            }
        </section>
    )
}

export default PostScreen