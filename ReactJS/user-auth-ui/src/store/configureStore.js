import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/posts'
import thunk from 'redux-thunk';

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        posts: postsReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore