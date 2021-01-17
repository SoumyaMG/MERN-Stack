import React from 'react'
import axios from '../../config/axios'
import { connect } from 'react-redux'
import { setUser } from '../../actions/user'
import _ from 'lodash'

class Profile extends React.Component {
    componentDidMount() {
        if (_.isEmpty(this.props.user)) {
            axios.get('/users/account', {
                headers: {
                    'x-auth': localStorage.getItem('userAuth')
                }
            }).then((response) => {
                this.props.dispatch(setUser(response.data))
            })
                .catch((err) => {
                    this.props.history.push('/users/login')
                })
        }
    }

    render() {
        return (
            <div>
                <h2>Users Profile</h2>
                <h4>{this.props.user.username}</h4>
                <h3>Total posts written-{this.props.posts.length}</h3>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Profile)