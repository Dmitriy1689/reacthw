import { useContext } from "react"
import { PostContext } from "../../contexts/PostContext"

const Footer = () => {
    const {deleteAllPosts} = useContext(PostContext)

    const deleteAllHandler = () => {
        deleteAllPosts()
    }
    
    return (
        <button onClick={deleteAllHandler} type="button" className="btn btn-dark">Удалить все посты</button>
    )
}

export default Footer