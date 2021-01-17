export const increment = () => {
    return { type: 'INCREMENT' }
}

export const decrement = () => {
    return { type: 'DECREMENT' }
}

export const reset = () => {
    return { type: 'RESET' }
}
export const incrementBy = (num = 1) => {
    return { type: 'INCREMENT_BY', payload: num }
}

export const decrementBy = (num = 1) => {
    return { type: 'DECREMENT_BY', payload: num }
}