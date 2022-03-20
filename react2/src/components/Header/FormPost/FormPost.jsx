import { useContext, useState } from "react"
import { PostContext } from "../../../contexts/PostContext"

const FormPost = () => {
    
    const {addNewPost} = useContext(PostContext)
    
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [tags, setTags] = useState('')

    const changeUrlHandler = (e) => {
        setUrl(e.target.value)
    }

    const changeTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const changeDescriptionHandler = (e) => {
        setdescription(e.target.value)
    }

    const changeTagsHandler = (e) => {
        setTags(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (url.trim() && title.trim() && description.trim() && tags.trim()) {
        addNewPost(url, title, description, tags)
        setUrl('')
        setTitle('')
        setdescription('')
        setTags('')
        } else alert('Все поля должны быть заполнены!')
    }
    
    return (
        <form onSubmit={submitHandler} className="d-flex align-items-center flex-column">
            <div className="d-flex align-items-center justify-content-center flex-column">
                <input
                onChange={changeUrlHandler}
                type="text" 
                className="form-control my-1" 
                placeholder="Укажите ссылку на фото" 
                value={url} />
                <input
                onChange={changeTitleHandler}
                type="text"
                className="form-control my-1"
                placeholder="Добавьте заголовок"
                value={title}
                />
                <input
                onChange={changeDescriptionHandler}
                type="text"
                className="form-control my-1"
                placeholder="Оставьте описание"
                value={description}/>
                <input
                onChange={changeTagsHandler}
                type="text"
                className="form-control my-1"
                placeholder="Добавьте тег"
                value={tags}
                />
                <button type="submit" className="btn btn-primary my-1">Загрузить в MemoryBook</button>
            </div>
        </form>
    )
}

export default FormPost