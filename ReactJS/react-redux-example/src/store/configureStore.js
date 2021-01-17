import { createStore, combineReducers } from 'redux'
import countReducer from '../reducers/count'
import userReducer from '../reducers/users'

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        users: userReducer
    }))

    return store
}

export default configureStore