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
        <form onSubmit={submitHandler} className="container d-flex justify-content-center flex-column">
            <div className="url mb-3 mt-3 w-25 container d-flex justify-content-center">
                <input
                onChange={changeUrlHandler}
                type="text" 
                className="form-control" 
                placeholder="Укажите ссылку на фото" 
                value={url} />
            </div>
            <div className="title mb-3 w-25 container d-flex justify-content-center">
                <input
                onChange={changeTitleHandler}
                type="text"
                className="form-control"
                placeholder="Укажите заголовок к фото"
                value={title}
                />
            </div>
            <div className="description mb-3 w-25 container d-flex justify-content-center">
                <input
                onChange={changeDescriptionHandler}
                type="text"
                className="form-control"
                placeholder="Оставьте описание к фото"
                value={description}/>
            </div>
            <div className="tags mb-3 w-25 container d-flex justify-content-center">
                <input
                onChange={changeTagsHandler}
                type="text"
                className="form-control"
                placeholder="Добавьте теги"
                value={tags}
                />
            </div>
            <div className="mb-3 w-25 container d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-50">Загрузить в MemoryBook</button>
            </div>
        </form>
    )
}

export default FormPost