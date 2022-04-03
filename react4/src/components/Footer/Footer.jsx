import { useDispatch } from "react-redux"
import { deleteAllPosts } from "../../redux/actionCreators/postsActionCreators"

const Footer = () => {
    const dispatch = useDispatch()

    const deleteAllHandler = () => {
        dispatch(deleteAllPosts())
    }
    
    return (
        <button onClick={deleteAllHandler} type="button" className="btn btn-dark">Удалить все посты</button>
    )
}

export default Footer