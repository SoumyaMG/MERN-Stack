import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Show(props) {
    return (
        <div>
            <h2>This is a single post -  {props.post.title}</h2>
            <Link to={'/posts'}>back</Link>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log(state.posts)
    return {
        post: state.posts.find(post => post._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(Show)