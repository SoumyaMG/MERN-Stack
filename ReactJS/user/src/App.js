import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Users from './Users'
import UserShow from './UserShow'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <h2>Welcome to User Task Manager !!!</h2>
                        <li><Link to="/users">Users</Link></li>
                    </ul>

                    <Route path="/users" component={Users} exact={true} />
                    <Route path="/users/:id" component={UserShow} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App