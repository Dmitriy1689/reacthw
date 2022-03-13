import { useContext } from "react"
import { PostContext } from "../../../../contexts/PostContext"

const PostItem = ({url, title, description, tags, id}) => {
    
    const {deletePost} = useContext(PostContext)
    
    const deleteHandler = (e) => {
        deletePost(id)
    }

    return (
            
            <div className="col-sm-3 mx-1 my-1 border border-dark d-flex justify-content-center flex-column">
                <h5 className="card-title">{title}</h5>
                <img src={url} className="card-img-top img-thumbnail" alt="Ваше фото" width='auto' height='auto' />
                <p className="card-text border border-dark text-start px-1">Описание: {description}</p>
                <p className="card-text border border-dark text-start px-1">Теги: {tags}</p>
                <button onClick={deleteHandler} type="button" className="btn btn-danger my-2">Удалить пост</button>
            </div>
            )
}

export default PostItem