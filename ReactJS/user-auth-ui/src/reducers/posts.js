const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return [...action.payload]
        case 'ADD_POST':
            return [...state, action.payload]
        case 'REMOVE_POST':
            return state.filter((post) => {
                return post._id !== action.payload
            })
        default:
            return [...state]
    }
}

export default postsReducer