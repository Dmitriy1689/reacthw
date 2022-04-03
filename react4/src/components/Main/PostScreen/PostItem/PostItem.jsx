import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deletePost } from "../../../../redux/actionCreators/postsActionCreators"

const PostItem = ({url, title, description, tags, id}) => {
    
    const dispatch = useDispatch()
    
    const deleteHandler = (e) => {
        dispatch(deletePost(id))
    }
    return (
                <div className="col-sm-3 mx-1 my-1 border border-dark d-flex justify-content-center flex-column">
                    <h5 className="card-title">{title}</h5>
                    <img src={url} className="card-img-top img-thumbnail" alt="Ваше фото" width='auto' height='auto' />
                    <div className="card-text border border-dark text-start px-1 text-break">Описание: {description}</div>
                    <p className="card-text border border-dark text-start px-1">Теги: #{tags}</p>
                    <button onClick={deleteHandler} type="button" className="btn btn-danger my-2">Удалить пост</button>
                    <Link to={`/${id}`}>Подробнее</Link>
                </div>
                )
}

export default PostItem