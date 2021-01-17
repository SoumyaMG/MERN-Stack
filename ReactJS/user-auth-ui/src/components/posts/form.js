import React from 'react'
import { connect } from 'react-redux'
import { startAddPost } from '../../actions/posts'
//import axios from '../../config/axios';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const title = e.target.value
        this.setState({ title })
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            title: this.state.title
        }
        this.props.dispatch(startAddPost(formData))
        this.setState({ title: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Enter Title:
                <input type="text" value={this.state.title} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(Form) 