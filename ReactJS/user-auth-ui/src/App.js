import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import Register from './components/users/register'
import Login from './components/users/login'
import Profile from './components/users/profile'
import Account from './components/users/accounts'
import Logout from './components/users/logout'
import ListPost from './components/posts/list'
import Show from './components/posts/show'

function App(props) {

  return (
    <BrowserRouter>
      <div>
        <ul>
          {
            !_.isEmpty(props.user) ? (
              <div>
                <li>
                  <Link to="/users/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/users/account">Account</Link>
                </li>
                <li>
                  <Link to="/users/logout">Logout</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
              </div>
            ) : (
                <div>
                  <li>
                    <Link to="/users/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/users/login">Login</Link>
                  </li>
                </div>
              )
          }

        </ul>

        <Route path="/users/register" component={Register} />
        <Route path="/users/login" component={Login} />
        <Route path="/users/profile" component={Profile} />
        <Route path="/users/account" component={Account} />
        <Route path="/users/logout" component={Logout} />
        <Route path="/posts" component={ListPost} exact={true} />
        <Route path="/posts/:id" component={Show} />

      </div >
    </BrowserRouter >
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
