import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3005/users')
            .then(response => {
                const users = response.data
                this.setState(() => ({ users }))
                console.log('users')
            })
    }
    render() {
        console.log(this.state.users)
        return (
            <div>
                <ul>
                    <h2>Listiung Users</h2>
                    {
                        this.state.users.map(function (user) {
                            return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserList