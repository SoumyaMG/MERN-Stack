import React from 'react'
import axios from '../../config/axios'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            errMsg: '',
            successMsg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/users/register', formData)
            .then((response) => {
                // console.log('resolve', response.data)
                if (response.data.hasOwnProperty('errors')) {
                    this.setState({
                        errMsg: response.data.message
                    })
                }
                else {
                    this.setState({
                        successMsg: 'successfully registered',
                        username: '',
                        email: '',
                        password: '',
                        errMsg: ''
                    })

                }
                console.log(response.data)
            })
            .catch((err) => {
                console.log('reject', err)
            })
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                {this.state.errMsg && <p>{this.state.errMsg}</p>}
                {this.state.successMsg && <p>{this.state.successMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                    UserName:
                    <input type="text" value={this.state.username} name="username" onChange={this.handleChange} /> <br />
                    Email:
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} /> <br />
                    Password:
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange} /> <br />
                    <input type="submit" value="register" />
                </form>
            </div>
        )
    }
}

export default Register