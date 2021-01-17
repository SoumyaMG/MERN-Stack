import React from 'react'
import uuid from 'uuid'
import { addUser } from '../action/users'
import { connect } from 'react-redux'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const name = e.target.value
        this.setState({ name })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = {
            _id: uuid(),
            name: this.state.name
        }
        this.props.dispatch(addUser(user))
        this.setState({ name: '' })
    }

    render() {
        return (
            <div>
                <h2>Add User</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="enter username" value={this.state.name} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <p>previos user-{this.props.prevUser.name}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        prevUser: state.users[state.users.length - 1]
    }
}

export default connect(mapStateToProps)(AddUser)