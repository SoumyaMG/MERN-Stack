import React from 'react'
import axios from '../../config/axios'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/users/login', formData)
            .then((response) => {
                // console.log('resolve', response.data)
                if (response.data.hasOwnProperty('errors')) {
                    //  console.log(response.data)
                    this.setState({
                        errMsg: response.data.errors
                    })
                }
                else {
                    //console.log(response.data)
                    localStorage.setItem('userAuth', response.data.token)
                    this.props.history.push('/users/profile')
                }
            })
            .catch((err) => {
                console.log('reject', err)
            })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                {this.state.errMsg && <p>{this.state.errMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                    Email:
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} /> <br />
                    Password:
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange} /> <br />
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }
}

export default Login