import uuid from 'uuid'
import faker from 'faker'

const usersInitialState = [
    { _id: uuid(), name: faker.name.firstName() },
    { _id: uuid(), name: faker.name.firstName() },
    { _id: uuid(), name: faker.name.firstName() }
]

const userReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload]
        //return [action.playload,...state]
        case 'REMOVE_USER':
            return state.filter((user) => {
                return user._id !== action.payload
            })
        default:
            return [...state]  //es6
        //return [].concat(state)
    }
}

export default userReducer