import axios from '../config/axios'

export const startSetPosts = () => {
    return (dispatch) => {
        axios.get('/posts', {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then((response) => {
                dispatch(setPosts(response.data))
            })
    }
}

export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const startAddPost = (post) => {
    return (dispatch) => {
        axios.post('/posts', post, {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                dispatch(addPost(response.data))
            })
    }
}

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    }
}

export const startRemovePost = (id) => {
    return (dispatch) => {
        axios.delete(`/posts/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(() => {
                dispatch(removePost(id))
            })
    }
}

export const removePost = (id) => {
    return {
        type: 'REMOVE_POST',
        payload: id
    }
}