import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import UserShow from './UserShow'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                this.setState(() => ({ users }))
            })
    }

    render() {
        return (
            <div>
                <h2>Listing Users {this.state.users.length}</h2>
                <table border="border">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User Name</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(function (user) {
                                return (<tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                    <td>{user.email}</td>
                                    <td> <Link to={`/users/${user.id}`}>show</Link></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users