import { useContext, useEffect, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'
import styles from './Modal.module.css'

const ModalInner = ({currentIndex, closeModal, url, title, description, tags }) => {
    const escHandler = (e) => {
        if (e.code  === 'Escape')
        closeModal()
    }
    
    useEffect(() => {
        window.document.addEventListener('keydown', escHandler)
        return () => {
            window.document.removeEventListener('keydown', escHandler)
        }
    }, [])
    const { posts, setPosts, LSPostkey } = useContext(PostContext)
    const [newUrl, setNewUrl] = useState(url)
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newTags, setNewTags] = useState(tags)

    const changeUrlHandler = (e) => {
        setNewUrl(e.target.value)
    }

    const changeTitleHandler = (e) => {
        setNewTitle(e.target.value)
    }

    const changeDescriptionHandler = (e) => {
        setNewDescription(e.target.value)
    }

    const changeTagsHandler = (e) => {
        setNewTags(e.target.value)
    }

    const editPostHandler = (e) => {
        e.preventDefault()
        posts[currentIndex].url = newUrl
        posts[currentIndex].title = newTitle
        posts[currentIndex].description = newDescription
        posts[currentIndex].tags = newTags
        localStorage.setItem(LSPostkey, JSON.stringify(posts))
        closeModal()
    }

    /*useEffect(() => {
        const dataFromLS = localStorage.getItem(LSPostkey)
        if (dataFromLS) {
          setPosts(JSON.parse(dataFromLS))
        }
      }, [])

    useEffect(() => {
        localStorage.setItem(LSPostkey, JSON.stringify(posts))
      }, [posts])*/

    console.log(currentIndex, newUrl);
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <form className="d-flex align-items-center flex-column">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <input
                        onChange={changeUrlHandler}
                        type="text" 
                        className="form-control my-1" 
                        placeholder="Укажите ссылку на фото"
                        value={newUrl}
                        />
                        <input
                        onChange={changeTitleHandler}
                        type="text"
                        className="form-control my-1"
                        placeholder="Добавьте заголовок"
                        value={newTitle}
                        />
                        <input
                        onChange={changeDescriptionHandler}
                        type="text"
                        className="form-control my-1"
                        placeholder="Оставьте описание"
                        value={newDescription}
                        />
                        <input
                        onChange={changeTagsHandler}
                        type="text"
                        className="form-control my-1"
                        placeholder="Добавьте тег"
                        value={newTags}
                        />
                        <button onClick={editPostHandler} type="submit" className="btn btn-primary my-1">Редактировать</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalInner