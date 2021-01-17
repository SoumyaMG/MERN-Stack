const { createStore, combineReducers } = require('redux')

// reducers 
const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        case 'INCREMENT_BY':
            return state + action.payload
        default:
            return state
    }
}

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload]
        // return state.concat(action.payload)
        case 'REMOVE_USER':
            return state.filter(user => user.id != action.payload)
        case 'UPDATE_USER':
            return state.map(user => {
                if (user.id == action.payload.id) {
                    return { ...user, ...action.payload.user }
                    // return Object.assign({}, user, action.payload.user)
                } else {
                    return { ...user }
                }
            })
        default:
            return [...state]
    }
}

const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...action.payload }
        default:
            return { ...state }
    }
}

function configureStore() {
    const store = createStore(combineReducers({
        count: countReducer,
        users: usersReducer,
        currentUser: currentUserReducer
    }))
    return store
}

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

// action creator / generator 
const increment = () => {
    return { type: 'INCREMENT' }
}

const decrement = () => {
    return { type: 'DECREMENT' }
}

const reset = () => {
    return { type: 'RESET' }
}

const incrementBy = (num = 0) => {
    return { type: 'INCREMENT_BY', payload: num }
}

// users
const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}

const removeUser = (id) => {
    return { type: 'REMOVE_USER', payload: id }
}

const updateUser = (id, user) => {
    return { type: 'UPDATE_USER', payload: { id, user } }
}


const setUser = (user) => {
    return {
        type: 'SET_USER', payload: user
    }
}


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(incrementBy(2))
store.dispatch(incrementBy())

store.dispatch(addUser({ id: 1, name: 'arjun' }))
store.dispatch(addUser({ id: 2, name: 'mohanraj' }))
store.dispatch(addUser({ id: 3, name: 'gokul' }))

store.dispatch(removeUser(2))

store.dispatch(updateUser(1, { name: 'sanket' }))

store.dispatch(setUser({ id: 'abc123', username: 'hello123', email: 'h2llo@gmail.com' }))