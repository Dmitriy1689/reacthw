import { ADD_NEW_POST, DELETE_ALL_POSTS, DELETE_POST, EDIT_POST } from "../actionTypes/postsTypes";

const postsReducer = (store = [], action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return [...store, action.payload]

        case DELETE_POST:
            return store.filter((post) => +post.id !== +action.payload)

        case DELETE_ALL_POSTS:
            return [];

        case EDIT_POST:
            return store.map((post) => {
                if (store.indexOf(post) === action.payload.index) {
                    return {
                        ...post,
                        url: action.payload.url,
                        title: action.payload.title,
                        description: action.payload.description,
                        tags: action.payload.tags,
                    }
                } else return post
            });
    
        default:
            return store
    }
}

export default postsReducer