import React from 'react'
//import axios from '../../config/axios'
import { startSetPosts, startRemovePost } from '../../actions/posts'
import { connect } from 'react-redux'
import Form from './form'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class ListPost extends React.Component {

    handleClick = (id) => {
        this.props.dispatch(startRemovePost(id))
    }

    componentDidMount() {
        if (_.isEmpty(this.props.posts)) {
            this.props.dispatch(startSetPosts())
        }
    }

    render() {
        return (
            <div>
                <h4>Listing posts-{this.props.posts.length} by user {this.props.user.username}</h4>
                <p>{this.props.ownData}</p>
                <ul>
                    {
                        this.props.posts.map((post) => {
                            return <li key={post._id}><Link to={`/posts/${post._id}`}>{post.title}</Link><button onClick={() => {
                                const confirmRemove = window.confirm('Are you sure??')
                                if (confirmRemove) {
                                    this.handleClick(post._id)
                                }
                            }}>remove</button></li>
                        })
                    }
                </ul>
                <Form />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts: state.posts,
        ownData: "somedata"  //even we can have our own data
    }
}

export default connect(mapStateToProps)(ListPost)