import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3005/users/${id}`)
            .then(response => {
                const user = response.data
                this.setState(() => ({ user }))
            })
    }
    render() {
        return (
            <div>
                <h1>Showing User</h1>
                <h4>{this.state.user.id}</h4>
                <h4>{this.state.user.name}</h4>
                <h4>{this.state.user.email}</h4>
            </div>
        )
    }
}

export default UserShow