import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { PostContext } from "../../../../contexts/PostContext"
import FormPost from "../../../Header/FormPost/FormPost"
import Modal from "../../../Modal/Modal"

const postDetailVariants = {
  start: {
    opacity: 0,
    y: 200
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    }
  }
}

const PostDetail = () => {

    const { posts } = useContext(PostContext)
    
    const { id } = useParams()
        
    const postForViewing = posts.find(post => post.id === +id)
    
    const currentIndex = posts.indexOf(postForViewing)

    const [viewModal, setViewModal] = useState(false)

    const openModal = () => {
      setViewModal(true)
    }

    const closeModal = () => {
      setViewModal(false)
    }

    return (
    <>
      <motion.section variants={postDetailVariants} initial='start' animate='end' className="d-flex flex-column align-items-center">
        <div className="card">
          <h5 className="card-title">{postForViewing.title}</h5>
          <img src={postForViewing.url} className="card-img-top img-thumbnail" alt="Ваше фото" width='100%' height='100%' />
          <div className="card-text border border-dark text-start px-1 text-break">Описание: {postForViewing.description}</div>
          <p className="card-text border border-dark text-start px-1">Тег: #{postForViewing.tags}</p>
          <button onClick={openModal} type="button" className="btn btn-success my-1">Редактировать пост</button>
        </div>
      </motion.section>
      <Modal currentIndex={currentIndex} closeModal = {closeModal} state={viewModal} id = {id} url = {postForViewing.url} title = {postForViewing.title} description={postForViewing.description} tags={postForViewing.tags}>
        <FormPost />
      </Modal>
    </>
    
    )
}

export default PostDetail