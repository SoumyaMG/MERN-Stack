import React from 'react'
import axios from 'axios'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                user: {}
            }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const user = response.data
                this.setState(() => ({ user }))
            })
    }
    render() {
        return (
            <div>
                <h2>User--{this.state.user.name}</h2>
            </div>
        )
    }
}

export default Users