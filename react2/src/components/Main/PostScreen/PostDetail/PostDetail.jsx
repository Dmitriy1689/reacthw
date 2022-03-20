import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../../../../contexts/PostContext"
import FormPost from "../../../Header/FormPost/FormPost"
import Modal from "../../../Modal/Modal"

const PostDetail = () => {

    const { posts } = useContext(PostContext)
    
    const { id } = useParams()
    
    const currentPost = posts.find(post => post.id === +id)

    const currentIndex = posts.indexOf(currentPost)

    const [viewModal, setViewModal] = useState(false)

    const openModal = () => {
      setViewModal(true)
    }

    const closeModal = () => {
      setViewModal(false)
    }

    return (
    <>
      <section className="d-flex flex-column align-items-center">
        <div className="card">
          <h5 className="card-title">{currentPost.title}</h5>
          <img src={currentPost.url} className="card-img-top img-thumbnail" alt="Ваше фото" width='100%' height='100%' />
          <div className="card-text border border-dark text-start px-1 text-break">Описание: {currentPost.description}</div>
          <p className="card-text border border-dark text-start px-1">Тег: #{currentPost.tags}</p>
          <button onClick={openModal} type="button" className="btn btn-success my-1">Редактировать пост</button>
        </div>
      </section>
      <Modal currentIndex={currentIndex} closeModal = {closeModal} state={viewModal} id = {id} url = {currentPost.url} title = {currentPost.title} description={currentPost.description} tags={currentPost.tags}>
        <FormPost />
      </Modal>
    </>
    
    )
}

export default PostDetail