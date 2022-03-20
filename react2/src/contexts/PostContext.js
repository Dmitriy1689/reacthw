import { createContext, useEffect, useState } from "react";
const PostContext = createContext()
const LSPostkey = 'post'
const PostProvider = ({children}) => {
    
    const [posts, setPosts] = useState([])

    const addNewPost = (url, title, description, tags, id) =>{
        setPosts((prev) => [...prev,{
          url,
          title,
          description,
          tags,
          id: Date.now(),
        }])
      }

         
    const deletePost = (id) => {
        setPosts(prev => prev.filter((prevPost) => prevPost.id !== id))
      }

    const deleteAllPosts = () => {
          setPosts([])
      }

    useEffect(() => {
        const dataFromLS = localStorage.getItem(LSPostkey)
        if (dataFromLS) {
          setPosts(JSON.parse(dataFromLS))
        }
      }, [])

    useEffect(() => {
        localStorage.setItem(LSPostkey, JSON.stringify(posts))
      }, [posts])

    return (
        <PostContext.Provider value={{posts, addNewPost, deletePost, deleteAllPosts, setPosts}}>
          {
              children
          }
        </PostContext.Provider>
    )
}

export default PostProvider
export {
    PostContext
}