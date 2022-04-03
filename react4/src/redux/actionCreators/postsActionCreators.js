import { ADD_NEW_POST, DELETE_ALL_POSTS, DELETE_POST, EDIT_POST } from "../actionTypes/postsTypes"

export const addNewPost = (addUrl, addTitle, addDescription, addTags) => {
    return {
        type: ADD_NEW_POST,
        payload: {
            url: addUrl,
            title: addTitle,
            description: addDescription,
            tags: addTags,
            id: Date.now(),
          },
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id,
    }
}

export const deleteAllPosts = () => {
    return {
        type: DELETE_ALL_POSTS
    }
}

export const editPost = (index, newUrl, newTitle, newDescription, newTags) => {
    return {
        type: EDIT_POST,
        payload: {
            url: newUrl,
            title: newTitle,
            description: newDescription,
            tags: newTags,
            index: index,          
        }
    }
}