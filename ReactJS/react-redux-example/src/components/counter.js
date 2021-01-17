import React from 'react'
import { increment, decrement, reset } from '../action/count'
import { connect } from 'react-redux'

import CountForm from './form'

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
            <button onClick={() => {
                props.dispatch(reset())
            }}>reset</button>
            <hr />
            <CountForm />
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