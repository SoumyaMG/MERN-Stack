import React from 'react'
import { connect } from 'react-redux'
import { removeUser } from '../action/users'


function User(props) {
    return (
        <div>
            <ul>
                {
                    props.users.map((user) => {
                        return (<li key={user._id}>{user.name}
                            <button onClick={() => {
                                alert(user.name)
                            }}>show</button>
                            <button onClick={() => {
                                props.dispatch(removeUser(user._id))
                            }}>remove</button></li>)
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(User)