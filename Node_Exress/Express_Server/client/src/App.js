import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import UserList from './List'
import UserShow from './Show'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <h2>React App</h2>
                <h3><Link to='/'>Home</Link></h3>
                <h3><Link to='/users'>Users</Link></h3>

                <Route path='/' exact={true} />
                <Route path='/users' component={UserList} />
                <Route path='/users/:id' component={UserShow} />
            </BrowserRouter>
        )
    }
}
export default App