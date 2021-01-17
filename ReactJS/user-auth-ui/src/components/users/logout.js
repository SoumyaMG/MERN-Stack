import React from 'react'
import { removeUser } from '../../actions/user'
import { connect } from 'react-redux'
import _ from 'lodash'

function Logout(props) {
    if (!_.isEmpty(props.user)) {
        localStorage.removeItem('userAuth')
        props.dispatch(removeUser())
        //props.history.push('/users/login')
    }

    return (
        <div>
            <p>You Have Successfully been logged out</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout)