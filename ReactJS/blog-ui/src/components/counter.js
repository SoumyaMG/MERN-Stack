import React from 'react'
import { increment, decrement } from '../actions/count'
import { connect } from 'react-redux'

function Counter(props) {
    console.log(props)
    return (
        <div>
            <h2>Counter - {props.count}</h2>
            <button onClick={() => {
                props.dispatch(increment())
            }}>up</button>
            <button onClick={() => {
                props.dispatch(decrement())
            }}>down</button>
        </div>
    )
}

// export default Counter
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter)