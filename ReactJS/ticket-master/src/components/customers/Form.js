import React from 'react'
import { Link } from 'react-router-dom'

class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.isEdit ? props.customer.name : '',
            email: props.isEdit ? props.customer.email : '',
            mobile: props.isEdit ? props.customer.mobile : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleMobileChange = this.handleMobileChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }

        this.props.handleSubmit(formData)
    }

    handleNameChange(e) {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    handleEmailChange(e) {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    handleMobileChange(e) {
        const mobile = e.target.value
        this.setState(() => ({ mobile }))
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Fill the Customer Form</legend>
                    <br /><br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                        </label><br /><br />
                        <label>
                            Email:
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                        </label><br /><br />
                        <label>
                            Mobile:
                        <input type="text" value={this.state.mobile} onChange={this.handleMobileChange} />
                        </label><br /><br />
                        <input type="submit" /> or <Link to="/customers">back</Link>
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default CustomerForm